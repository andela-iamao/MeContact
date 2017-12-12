import { AsyncStorage } from 'react-native';

const options = { start: {}, end: {}, error: {} };


export const createAsyncAction = (start, end, error, fn, opts = options) => {
  return (dispatch) => {
    dispatch({ type: start, payload: { ...opts.start } });
    return fn(dispatch)
      .then((response) => dispatch({ type: end, payload: { ...opts.end, response } }))
      .catch((err) => dispatch({ type: error, payload: { ...err, ...opts.error } }))
  }
};

export const as = {
  async get(key) {
    const data = await AsyncStorage.getItem(key);
    if (!data) {
      await AsyncStorage.setItem(key, '[]');
      return [];
    }
    return JSON.parse(data);
  },
  async post(key, value) {
    const data = await AsyncStorage.getItem(key);
    let jsonData;
    if (!data) {
      await AsyncStorage.setItem(key);
      jsonData = [{ ...value, id: 1 }];
    } else {
      jsonData = JSON.parse(data);
      jsonData.push({ ...value, id: jsonData.length + 1 });
    }
    await AsyncStorage.setItem(key, JSON.stringify(jsonData));
    return jsonData;
  },
  async put(key, contact) {
    const data = await AsyncStorage.getItem(key);
    const jsonData = JSON.parse(data);
    const val = jsonData.map((data) => data.id === contact.id ? contact : data );
    await AsyncStorage.setItem(key, JSON.stringify(val));
    return val;
  },
  async delete(key, contact) {
    const data = await AsyncStorage.getItem(key);
    const jsonData = JSON.parse(data);
    const val = jsonData.filter((data) => data.id !== contact.id);
    await AsyncStorage.setItem(key, JSON.stringify(val));
    return val;
  }
};
