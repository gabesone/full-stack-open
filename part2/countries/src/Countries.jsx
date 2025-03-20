function Countries({ filteredCountries, search, setSearchedCountry }) {
  return (
    <div>
      {filteredCountries.length > 1 &&
        filteredCountries.length <= 10 &&
        filteredCountries.map((country) => (
          <div key={country.name.common}>
            {country.name.common}
            <button onClick={() => setSearchedCountry(country.name.common)}>
              show
            </button>
          </div>
        ))}

      {search && filteredCountries.length > 10 && (
        <p>Too many matches, specify another filter</p>
      )}
    </div>
  );
}

export default Countries;
