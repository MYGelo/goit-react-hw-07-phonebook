import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'Redux/operations';
import { selectError, selectIsLoading } from 'Redux/selectors';
import { ContactsForm } from './contactForm/contactForm';
import { ContactList } from './contactList/contactList';
import { ContactFilter } from './Filter/Filter';
// import { selectTasks } from 'Redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useDispatch(selectIsLoading);
  const error = useDispatch(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <div
        style={{
          justifyContent: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h1>Phonebook</h1>
        <ContactsForm />
        <h2>Contacts</h2>
        {isLoading && !error && <b>Request in progress...</b>}
        <ContactFilter />
        <ContactList />
      </div>
    </>
  );
};