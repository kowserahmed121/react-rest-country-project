import { useState } from "react";
import "./Country.css";
const Country = ({ country }) => {
  const [visit, setVisit] = useState(false);
  const handleVisit = () => {
    setVisit(!visit);
  };
  const { name, flags, capital, continents, population, region } = country;
  return (
    <div className="country-style">
      <h3>Country Name : {name.common}</h3>
      <div className="flex">
        <p>Continent: {continents}</p>
        <p>Capital: {capital}</p>
      </div>
      <div className="flex">
        <p>Population: {population}</p>
        <p>Region: {region}</p>
      </div>
      <div className="img-div">
        <img className="width" src={flags.png} alt="" />
      </div>
      <button onClick={handleVisit} className="visitBtn">
        {visit ? "visited" : "want visit"}
      </button>
    </div>
  );
};

export default Country;
