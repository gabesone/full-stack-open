import { useEffect, useState } from "react";
import Filter from "./Filter";
import PersonForm from "./PersonForm";
import Persons from "./Persons";
import phoneService from "./services/service";
import service from "./services/service";
import Notification from "./Notification";
import ErrorNotification from "./ErrorNotification";

export const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [phone, setPhone] = useState("");
  const [search, setSearch] = useState("");
  const [notification, setNotification] = useState("");
  const [errorNotification, setErrorNotification] = useState("");

  useEffect(() => {
    phoneService
      .getPersons()
      .then((initalPhonebook) => setPersons(initalPhonebook));
  }, []);

  function handleNewPerson(e) {
    e.preventDefault();

    if (!newName) return;

    const nameExist = persons.find((person) => person.name === newName);

    if (nameExist) {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        const selectedPerson = persons.find(
          (person) => person.name === newName
        );

        service
          .updatePhoneNumber(selectedPerson.id, {
            ...selectedPerson,
            number: phone,
          })
          .then((upPerson) => {
            const updatedPersons = persons.map((person) =>
              person.id === upPerson.id ? upPerson : person
            );

            setPersons(updatedPersons);
          })
          .catch((error) => {
            console.log(error.message);
            setErrorNotification(selectedPerson.name);
            setTimeout(() => {
              setErrorNotification("");
            }, 5000);
          });

        setNewName("");
        setPhone("");
      }
    } else {
      const person_obj = {
        name: newName,
        number: phone,
      };

      service.addPerson(person_obj).then((newPerson) => {
        setPersons(persons.concat(newPerson));
        setNotification(newPerson.name);

        setTimeout(() => {
          setNotification("");
        }, 5000);
      });

      setNewName("");
      setPhone("");
    }
  }

  function handleDelete(person) {
    if (window.confirm(`Delete ${person.name} ?`)) {
      service
        .deletePerson(person.id)
        .then((deletePerson) =>
          setPersons(persons.filter((person) => person.id !== deletePerson.id))
        );
    }
  }

  const filteredPeople = search
    ? persons.filter((person) =>
        person.name.toLowerCase().includes(search.toLowerCase())
      )
    : persons;

  return (
    <div>
      <h2>Phonebook</h2>

      <Notification message={notification} />
      <ErrorNotification errorMessage={errorNotification} />

      <Filter search={search} setSearch={setSearch} />

      <h2>add a new</h2>

      <PersonForm
        newName={newName}
        onHandleNewPerson={handleNewPerson}
        phone={phone}
        setNewName={setNewName}
        setPhone={setPhone}
      />
      <h2>Numbers</h2>
      <Persons persons={filteredPeople} onHandleDelete={handleDelete} />
    </div>
  );
};

export default App;
