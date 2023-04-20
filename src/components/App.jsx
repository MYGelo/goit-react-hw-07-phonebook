import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'Redux/operations';
import { ContactsForm } from './contactForm/contactForm';
import { ContactList } from './contactList/contactList';
import { ContactFilter } from './Filter/Filter';
// import { getTasks } from 'Redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(state => state.contacts);
  console.log(items, isLoading, error);
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
        <ContactList />
      </div>

      <div>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <p>{items.length > 0 && JSON.stringify(items, null, 2)}</p>
      </div>
    </>
  );
};
