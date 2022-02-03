import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilteredContacts } from '../../redux/contacts/contacts-selectors';
import {
  fetchContacts,
  deleteContacts,
} from '../../redux/contacts/contacts-operations.js';
import s from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();
  const onDeleteClick = id => dispatch(deleteContacts(id));
  useEffect(() => dispatch(fetchContacts()), [dispatch]);

  return (
    <ul className={s.contactList}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={s.contact}>
            <p>
              {name}: {number}
            </p>
            <button
              className={s.buttonDelete}
              type="button"
              onClick={() => onDeleteClick(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array,
  onDeleteClick: PropTypes.func,
};

// ===========================================================================

// import PropTypes from 'prop-types';
// import s from './ContactList.module.css';

// export default function ContactList({ contacts, onDelete }) {
//   return (
//     <ol className={s.list}>
//       {contacts.map(el => (
//         <li key={el.id}>
//           <p>
//             <span className={s.text}>
//               {el.name}: {el.number}
//             </span>
//             <button
//               type="button"
//               onClick={() => onDelete(el.id)}
//               className={s.btn}
//             >
//               Delete
//             </button>
//           </p>
//         </li>
//       ))}
//     </ol>
//   );
// }

// ContactList.propTypes = {
//   contacts: PropTypes.array.isRequired,
//   onDelete: PropTypes.func.isRequired,
// };
