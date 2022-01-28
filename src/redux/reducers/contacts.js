import {
  ADD_CONTACTS,
  DELETE_CONTACTS,
  FILTER_CONTACTS,
} from '../types/index.js';

const contacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactsStorage = JSON.parse(localStorage.getItem('contacts'));

export const contactsReducer = (
  state = contactsStorage ?? contacts,
  action,
) => {
  switch (action.type) {
    case ADD_CONTACTS:
      localStorage.setItem(
        'contacts',
        JSON.stringify([...state, action.payload]),
      );
      return [...state, action.payload];
    case DELETE_CONTACTS:
      const contact = state.filter(contact => contact.id !== action.payload);
      localStorage.setItem('contacts', JSON.stringify(contact));
      return contact;
    default:
      return state;
  }
};

export const filterReducer = (state = '', action) => {
  switch (action.type) {
    case FILTER_CONTACTS:
      return action.payload;
    default:
      return state;
  }
};
