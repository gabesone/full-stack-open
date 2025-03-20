function Persons({ persons, onHandleDelete }) {
  return (
    <div>
      {persons.map((person) => (
        <div key={person.id}>
          {person.name} {person.number}
          <button onClick={() => onHandleDelete(person)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default Persons;
