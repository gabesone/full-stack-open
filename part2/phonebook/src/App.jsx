import { useEffect, useState } from "react";
import Filter from "./Filter";
import PersonForm from "./PersonForm";
import Persons from "./Persons";
import phoneService from "./services/service";
import service from "./services/service";

export const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [phone, setPhone] = useState("");
  const [search, setSearch] = useState("");

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
      alert(`${newName} is already added to phonebook`);
      return;
    }

    const person_obj = {
      name: newName,
      number: phone,
    };

    service
      .addPerson(person_obj)
      .then((newPerson) => setPersons(persons.concat(newPerson)));

    setNewName("");
    setPhone("");
  }

  const filteredPeople = search
    ? persons.filter((person) =>
        person.name.toLowerCase().includes(search.toLowerCase())
      )
    : persons;

  return (
    <div>
      <h2>Phonebook</h2>
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
      <Persons persons={filteredPeople} />
    </div>
  );
};

export default App;
