import React from 'react';
import { View, Image } from 'react-native';

import style from '../../style/style';

const Avatar = () => {
  return (
    <View >
      <Image
        style={style.imgAvatar}
        source={require('../../assets/images/nanna.jpg')}
      />
    </View>
  );
};

export { Avatar };
