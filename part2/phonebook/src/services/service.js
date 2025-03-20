import axios from "axios";

const DB_URL = "http://localhost:3001/persons";

const getPersons = () => {
  const response = axios.get(DB_URL);
  return response.then((response) => response.data);
};

const addPerson = (newPerson) => {
  const request = axios.post(DB_URL, newPerson);
  return request.then((response) => response.data);
};

const deletePerson = (id) => {
  const request = axios.delete(`${DB_URL}/${id}`);
  return request.then((response) => response.data);
};

const updatePhoneNumber = (id, newPhoneNumber) => {
  const request = axios.put(`${DB_URL}/${id}`, newPhoneNumber);
  return request
    .then((response) => response.data)
    .catch((error) => console.log(error.messsage));
};

export default { getPersons, addPerson, deletePerson, updatePhoneNumber };
