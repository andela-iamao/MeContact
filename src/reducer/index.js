import { combineReducers } from 'redux';
import contacts from './contacts.reducer';
import ui from './ui.reducer';

export default combineReducers({ contacts, ui });
