import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Countries from "./Countries";
import SingleCountry from "./SingleCountry";

const COUNTRIES_URL = "https://studies.cs.helsinki.fi/restcountries/";

function App() {
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([]);
  const [singleCountry, setSingleCountry] = useState(null);
  const [searchedCountry, setSearchedCountry] = useState(null);

  function handleSearchCountries(e) {
    e.preventDefault();

    setSearch(e.target.value);
    setSearchedCountry(null);
  }

  useEffect(() => {
    function getAllCountries() {
      axios
        .get(`${COUNTRIES_URL}/api/all`)
        .then((response) => setCountries(response.data))
        .catch((error) => console.log(error));
    }
    getAllCountries();
  }, []);

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  );

  // const countryName =
  //   filteredCountries.length === 1 ? filteredCountries[0].name.common : "";

  useEffect(() => {
    if (!searchedCountry) {
      setSingleCountry(null);
      return;
    }

    function getCountry() {
      axios
        .get(`${COUNTRIES_URL}/api/name/${searchedCountry}`)
        .then((response) => setSingleCountry(response.data))
        .catch((error) => console.log(error));
    }
    getCountry();
  }, [searchedCountry]);

  return (
    <div>
      <label htmlFor="countries">
        find countries{" "}
        <input
          type="text"
          name="countries"
          id="countries"
          value={search}
          onChange={handleSearchCountries}
        />
      </label>

      {!singleCountry && (
        <Countries
          filteredCountries={filteredCountries}
          search={search}
          setSearchedCountry={setSearchedCountry}
        />
      )}

      {singleCountry && <SingleCountry country={singleCountry} />}
    </div>
  );
}

export default App;
