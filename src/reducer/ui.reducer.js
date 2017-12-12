import initialState from './initialState';
import * as types from '../action/actionType';

export default (state = initialState.ui, { type, payload }) => {
  switch (type) {
    case types.SELECT_CONTACT: {
      return { ...state, active: 'contact' };
    }
    case types.EDIT_CONTACT: {
      return { ...state, active: 'add-contact' };
    }
    case types.START_CREATION: {
      return { ...state, active: 'add-contact' };
    }
    case types.DELETE_CONTACT_COMPLETE: {
      return { ...state, active: 'manage' };
    }
    case types.NAVIGATE: {
      return { ...state, active: payload };
    }
    default: {
      return { ...state };
    }
  }
}