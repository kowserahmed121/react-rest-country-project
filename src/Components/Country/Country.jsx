import { useState } from "react";
import "./Country.css";
const Country = ({ country, handleState, showHandleFlag }) => {
  const [visit, setVisit] = useState(false);
  const handleVisit = () => {
    setVisit(!visit);
  };
  const { name, flags, capital, continents, population, region } = country;
  return (
    <div className={`country-style ${visit && "visit-country"}`}>
      <h3 style={{ color: visit ? "tomato" : "black" }}>
        Country Name : {name.common}
      </h3>
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
      <div className="gap-div">
        <button onClick={handleVisit} className="visitBtn">
          {visit ? "visited" : "want-visit"}
        </button>
        {visit && "  complete visit this country"}
        <button onClick={() => handleState(country)} className="visitBtn">
          mark
        </button>
      </div>
      <button
      className="visitBtn"
        onClick={() => {
          showHandleFlag(country);
        }}
      >
        show flag
      </button>
    </div>
  );
};

export default Country;
