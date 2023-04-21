import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'Redux/operations';
import { selectError, selectIsLoading } from 'Redux/selectors';
import { ContactsForm } from './contactForm/contactForm';
import { ContactList } from './contactList/contactList';
import { ContactFilter } from './Filter/Filter';
import { Loader } from './loader/loader';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
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
        <ContactFilter />
        {isLoading && !error && <Loader />}
        <ContactList />
      </div>
    </>
  );
};
