import { combineReducers } from 'redux';
import { contactsReducer, filterReducer } from '../reducers/contacts';

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
