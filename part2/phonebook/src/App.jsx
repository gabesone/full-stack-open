import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [phone, setPhone] = useState("");
  const [search, setSearch] = useState("");

  function handleNewPerson(e) {
    e.preventDefault();

    if (!newName) return;

    const nameExist = persons.find((person) => person.name === newName);
    if (nameExist) {
      alert(`${newName} is already added to phonebook`);
      return;
    }

    const newPerson = [...persons, { name: newName, number: phone }];
    setPersons(newPerson);
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
      <label htmlFor="search">
        filter shown with
        <input
          name="search"
          id="search"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </label>
      <h2>add a new</h2>
      <form onSubmit={handleNewPerson}>
        <div>
          name:{" "}
          <input
            name="name"
            id="name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </div>
        <div>
          number:{" "}
          <input
            name="phone"
            id="phone"
            value={phone}
            type="tel"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {filteredPeople.map((person) => (
        <p key={person.name}>
          {person.name} {person.number}
        </p>
      ))}
    </div>
  );
};

export default App;
