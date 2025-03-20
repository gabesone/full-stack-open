import { useEffect, useState } from "react";
import axios from "axios";

const WEATHER_API = "https://api.openweathermap.org/data/2.5/weather?";
const WEATHER_ICON = "https://openweathermap.org/img/wn/";

const api_key = import.meta.env.VITE_WEATHER_KEY;

function SingleCountry({ country }) {
  const [weather, setWeather] = useState(null);

  const languages = Object.entries(country.languages);
  const lat = country.latlng[0];
  const lng = country.latlng[1];

  useEffect(() => {
    function getWeather() {
      axios
        .get(`${WEATHER_API}lat=${lat}&lon=${lng}&appid=${api_key}`)
        .then((response) => setWeather(response.data))
        .catch((error) => console.log(error));
    }
    getWeather();
  }, [lat, lng]);

  function convertKelvinToCelsius(kelvin) {
    return (kelvin - 273.15).toFixed(2);
  }

  const celsius = convertKelvinToCelsius(weather?.main.temp);
  const wind = weather?.wind.speed;
  const weatherIcon = weather?.weather[0].icon;
  const weatherDescription = weather?.weather[0].description;

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

      <div>
        <h2>Weather in {country.name.common}</h2>
        <p>Temperature {celsius} Celsius</p>
        <img
          src={`${WEATHER_ICON}${weatherIcon}@2x.png`}
          alt={weatherDescription}
        />
        <p>Wind {wind} m/s</p>
      </div>
    </div>
  );
}

export default SingleCountry;
