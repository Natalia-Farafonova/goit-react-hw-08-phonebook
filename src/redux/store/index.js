import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { contactsApi } from '../slices/contacts';
import filter from '../slices/filter';

const store = configureStore({
  reducer: {
    filter: filter,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
  devTools: process.env.NODE_ENV !== 'production',
});

setupListeners(store.dispatch);

export default store;

// ================================================================================

// import { configureStore } from '@reduxjs/toolkit';
// import contacts  from '../slices/contacts';
// import filter from '../slices/filter';

// const rootReducer = {
//   contacts,
//   filter,
// };

// const store = configureStore({
//   reducer: rootReducer,
//   devTools: process.env.NODE_ENV !== 'production',
// });

// export default store;

// ===========================================================================================

// import { createStore } from 'redux';
// import { devToolsEnhancer } from 'redux-devtools-extension';
// import { rootReducer } from '../reducers/index';

// const store = createStore(rootReducer, devToolsEnhancer());
// export default store;
