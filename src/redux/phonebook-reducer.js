import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { addNewContact, deleteContact, filterContacts } from './phonebook-actions';
import defaultContacts from '../components/dataBase/baseContacts';

const localContact = JSON.parse(window.localStorage.getItem('contacts')) ?? defaultContacts;

const items = createReducer(localContact, {
  [addNewContact]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) => state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [filterContacts]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
