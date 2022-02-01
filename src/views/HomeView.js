import Container from '../components/Container/Container';
import s from './View.module.css';

export default function HomeView() {
  return (
    <Container>
      <h1 className={s.title}>Phonebook</h1>
    </Container>
  );
}
