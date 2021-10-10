import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';

const addNewContact = createAction('contacts/add', (name, number) => ({
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
}));

const deleteContact = createAction('contacts/delete');

const filterContacts = createAction('contacts/filterContacts');

export { addNewContact, deleteContact, filterContacts };
