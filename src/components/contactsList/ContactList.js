import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilteredContacts } from '../../redux/phonebook-selectors';
import { deleteContact } from '../../redux/phonebook-actions';
import s from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();
  const handleDeleteContacts = id => dispatch(deleteContact(id));
  return (
    <>
      <h2>Contacts</h2>
      <ul className={s.contacts}>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
            <span>{name}:</span> <span>{number}</span>
            <button className={s.btn} type="button" onClick={() => handleDeleteContacts(id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
