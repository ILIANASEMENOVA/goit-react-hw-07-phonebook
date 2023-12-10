import { useDispatch, useSelector } from 'react-redux';
import ContactsListStyled from './ContactList.styled';

import { selectfindedContacts } from 'redux/selectors';
import { useEffect } from 'react';
import { deleteContact, fetchContacts } from 'redux/operations';

export const ContactList = () => {
  const dispatch = useDispatch();
  const findedContacts = useSelector(selectfindedContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contactsList = findedContacts.map(({ name, id, number }) => (
    <li key={id}>
      {name}: {number}
      <button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </li>
  ));

  return (
    <ContactsListStyled>
      <ul>{contactsList}</ul>
    </ContactsListStyled>
  );
};
