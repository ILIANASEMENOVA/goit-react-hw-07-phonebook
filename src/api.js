import axios from 'axios';

axios.defaults.baseURL = 'https://656cadefe1e03bfd572ea2aa.mockapi.io';

export const fetchContacts = async () => {
  const response = await axios.get('/contacts');
  return response.data;
};

export const addNewContact = async contact => {
  const response = await axios.post('/contacts', contact);
  return response.data;
};

export const deleteContactById = async contactId => {
  const response = await axios.delete(`/contacts/${contactId}`);
  return response.data;
};
