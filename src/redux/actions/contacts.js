import {
  ADD_CONTACTS,
  DELETE_CONTACTS,
  FILTER_CONTACTS,
} from '../types/index.js';

export const addContacts = (name, number) => ({
  type: ADD_CONTACTS,
  payload: name,
  number,
});

export const deleteContacts = id => ({
  type: DELETE_CONTACTS,
  payload: id,
});

export const filterContacts = value => ({
  type: FILTER_CONTACTS,
  payload: value,
});
