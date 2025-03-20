function SingleCountry({ country }) {
  const languages = Object.entries(country.languages);

  return (
    <div>
      <div>
        <h2>{country.name.common}</h2>

        <p>Capital {country.capital}</p>
        <p>Area {country.area}</p>
      </div>

      <div>
        <h2>Languages</h2>
        <ul>
          {languages.map(([code, language]) => (
            <li key={code}>{language}</li>
          ))}
        </ul>
      </div>

      <div>
        <img src={country.flags.png} alt={country.name.common} />
      </div>
    </div>
  );
}

export default SingleCountry;
