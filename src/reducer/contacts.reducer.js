import initialState from './initialState';

import {
  FETCH_CONTACTS,
  DELETE_CONTACT,
  UPDATE_CONTACT,
  SELECT_CONTACT,
  STOP_CREATION,
  SELECT_CONTACT_COMPLETE,
  FETCH_CONTACTS_COMPLETE,
  UPDATE_CONTACT_COMPLETE,
  DELETE_CONTACT_COMPLETE, CREATE_CONTACT, CREATE_CONTACT_COMPLETE, CREATE_CONTACT_ERROR, EDIT_CONTACT, START_CREATION,
} from '../action/actionType';

export default (state = initialState.contacts, { type, payload }) => {
  switch(type) {
    case FETCH_CONTACTS: {
      return { ...state, isLoading: true };
    }
    case FETCH_CONTACTS_COMPLETE: {
      return { ...state, isLoading: false, data: payload.response };
    }
    case CREATE_CONTACT: {
     return { ...state, isLoading: true, isCreating: true };
    }
    case CREATE_CONTACT_COMPLETE: {
      const { response } = payload;
      return { ...state, isLoading: false, data: response, selected: null, editing: null, isCreating: false };
    }
    case CREATE_CONTACT_ERROR: {
      return { ...state, error: payload, isLoading: false, isCreating: false };
    }
    case START_CREATION: {
      return { ...state, isLoading: true, isCreating: true };
    }
    case STOP_CREATION: {
      return { ...state, isCreating: false };
    }
    case EDIT_CONTACT: {
      return { ...state, editing: payload };
    }
    case DELETE_CONTACT: {
      return { ...state, isLoading: true };
    }
    case DELETE_CONTACT_COMPLETE: {
      const { response } = payload;
      return { ...state, isLoading: false, selected: null, data: response, editing: null, isCreating: false };
    }
    case UPDATE_CONTACT: {
      return { ...state, isLoading: true };
    }
    case UPDATE_CONTACT_COMPLETE: {
      const { response } = payload;
      return {...state, isLoading: false, data: response, editing: null, selected: null, isCreating: false };
    }
    case SELECT_CONTACT: {
      return { ...state, selected: payload };
    }
    default: {
      return { ...state };
    }
  }
};
