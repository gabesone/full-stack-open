function Filter({ search, setSearch }) {
  return (
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
  );
}

export default Filter;
