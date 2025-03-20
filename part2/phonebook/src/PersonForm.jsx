function PersonForm({
  onHandleNewPerson,
  newName,
  setNewName,
  phone,
  setPhone,
}) {
  return (
    <form onSubmit={onHandleNewPerson}>
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
  );
}

export default PersonForm;
