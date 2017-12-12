import * as types from './actionType';

import { createAsyncAction, as } from './util';

export const fetchContacts = () => (
  createAsyncAction(
    types.FETCH_CONTACTS,
    types.FETCH_CONTACTS_COMPLETE,
    types.FETCH_CONTACTS_ERROR,
    () => as.get('contacts')
  ));

export const createContact = (contacts) => (
  createAsyncAction(
    types.CREATE_CONTACT,
    types.CREATE_CONTACT_COMPLETE,
    types.CREATE_CONTACT_ERROR,
    () => as.post('contacts', contacts)
  ));

export const updateContact = (contact) => (createAsyncAction(
  types.UPDATE_CONTACT,
  types.UPDATE_CONTACT_COMPLETE,
  types.UPDATE_CONTACT_ERROR,
  () => as.put('contacts', contact)
));

export const deleteContact = (contact) => (createAsyncAction(
  types.DELETE_CONTACT,
  types.DELETE_CONTACT_COMPLETE,
  types.DELETE_CONTACT_ERROR,
  () => as.delete('contacts', contact)
));

export const startCreation = () => {
  return { type: types.START_CREATION };
};

export const stopCreation = () => {
  return { type: types.STOP_CREATION };
};

export const selectContact = (contact) => {
  return { type: types.SELECT_CONTACT, payload: contact };
};

export const clearSelected = () => {
  return { type: types.CLEAR_SELECTED };
};

export const editContact = (contact) => {
  return { type: types.EDIT_CONTACT, payload: contact };
};

export const clearEdit = () => {
  return { type: types.CLEAR_EDITING };
};

