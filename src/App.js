import { Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, Suspense, lazy } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Container from './components/Container/Container';
import AppBar from './components/AppBar/AppBar';
import PrivateRoute from './components/PrivateRoute';
import { fetchCurrentUser } from './redux/auth/auth-operations';
import PublicRoute from './components/PublicRoute';
import { getFetchingCurrent } from './redux/auth/auth-selectors';
const HomeView = lazy(() => import('./views/HomeView.js'));
const RegisterView = lazy(() => import('./views/RegisterView.js'));
const LoginView = lazy(() => import('./views/LoginView.js'));
const ContactsView = lazy(() => import('./views/ContactsView.js'));

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(getFetchingCurrent);
  useEffect(() => dispatch(fetchCurrentUser()), [dispatch]);
  return (
    <Container>
      {isFetchingCurrentUser ? (
        <h2>Loading</h2>
      ) : (
        <>
          <AppBar />
          <Suspense fallback={<p>Loading...</p>}>
            <Switch>
              <PublicRoute exact path="/">
                <HomeView />
              </PublicRoute>
              <PublicRoute path="/register" restricted>
                <RegisterView />
              </PublicRoute>
              <PublicRoute path="/login" redirectTo="/contacts" restricted>
                <LoginView />
              </PublicRoute>
              <PrivateRoute exact path="/contacts" redirectTo="/login">
                <ContactsView />
              </PrivateRoute>
              <Redirect to="/" />
            </Switch>
          </Suspense>

          <ToastContainer position="bottom-left" autoClose={3000} />
        </>
      )}
    </Container>
  );
}

// =================================================================================

// import React, { useState, useEffect } from 'react';
// import Section from './components/Section/Section';
// import ContactForm from './components/ContactForm/ContactForm';
// import { nanoid } from 'nanoid';
// import ContactList from './components/ContactList/ContactList';
// import Filter from './components/Filter/Filter';
// import s from './App.module.css';

// export default function App() {
//   const [contacts, setContacts] = useState([
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ]);

//   const [filter, setFilter] = useState('');

//   useEffect(() => {
//     const contactsStorage = JSON.parse(localStorage.getItem('contacts'));
//     if (contactsStorage) {
//       setContacts(contactsStorage);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('contacts', JSON.stringify(contacts));
//   }, [contacts]);

//   const formSubmitHandler = data => {
//     if (contacts.some(contact => contact.name === data.name)) {
//       alert(`${data.name} is already in contacts.`);
//     } else {
//       const contact = {
//         id: nanoid(10),
//         name: data.name,
//         number: data.number,
//       };
//       setContacts([contact, ...contacts]);
//     }
//   };

//   const deleteContact = id => {
//     setContacts(contacts.filter(contact => contact.id !== id));
//   };

//   const changeFilter = e => {
//     setFilter(e.currentTarget.value);
//   };

//   const normalizeFilter = filter.toLowerCase();
//   const filterContacts = contacts.filter(contact =>
//     contact.name.toLowerCase().includes(normalizeFilter),
//   );

//   return (
//     <div className={s.wrapper}>
//       <Section title="Phonebook">
//         <ContactForm onSubmit={formSubmitHandler} />
//       </Section>
//       <Section title="Contacts">
//         <Filter value={filter} onChange={changeFilter} />
//         <ContactList contacts={filterContacts} onDelete={deleteContact} />
//       </Section>
//     </div>
//   );
// }

// =======================================================================================

// export default class App extends Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };

//   formSubmitHandler = data => {
//     if (this.state.contacts.some(contact => contact.name === data.name)) {
//       alert(`${data.name} is already in contacts.`);
//     } else {
//       const contact = {
//         id: nanoid(10),
//         name: data.name,
//         number: data.number,
//       };
//       this.setState(prevState => ({
//         contacts: [contact, ...prevState.contacts],
//       }));
//     }
//   };

//   deleteContact = id => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== id),
//     }));
//   };

//   changeFilter = e => {
//     this.setState({ filter: e.currentTarget.value });
//   };

//   componentDidMount() {
//     const contactsStorage = JSON.parse(localStorage.getItem('contacts'));
//     if (contactsStorage) {
//       this.setState({ contacts: contactsStorage });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   render() {
//     const { filter } = this.state;

//     const normalizeFilter = this.state.filter.toLowerCase();
//     const filterContacts = this.state.contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizeFilter),
//     );

//     return (
//       <div className={s.wrapper}>
//         <Section title="Phonebook">
//           <ContactForm onSubmit={this.formSubmitHandler} />
//         </Section>
//         <Section title="Contacts">
//           <Filter value={filter} onChange={this.changeFilter} />
//           <ContactList
//             contacts={filterContacts}
//             onDelete={this.deleteContact}
//           />
//         </Section>
//       </div>
//     );
//   }
// }
