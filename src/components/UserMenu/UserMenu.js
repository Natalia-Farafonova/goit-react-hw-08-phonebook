import { useDispatch, useSelector } from 'react-redux';
import { getUserName } from '../../redux/auth/auth-selectors';
import { logOut } from '../../redux/auth/auth-operations';
import s from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);

  return (
    <div className={s.userMenu}>
      <span className={s.userName}>Wellcome, {name}</span>
      <button
        type="button"
        className={s.btnLogout}
        onClick={() => dispatch(logOut())}
      >
        Log Out
      </button>
    </div>
  );
}
