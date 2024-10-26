import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import "./component.css";
const Component = () => {
  const [country, countryState] = useState([]);
  const [visitCountry, setVisitCountry] = useState([]);

  const [visitFlag, setVisitFlag] = useState([]);

  const handleState = (country) => {
    const newVisitCountry = [...visitCountry, country];
    setVisitCountry(newVisitCountry);
  };

  const showHandleFlag = (flag) => {
    const newFlag = [...visitFlag, flag];
    setVisitFlag(newFlag);
  };

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => countryState(data));
  }, []);
  return (
    <div>
      <div>
        <h3>Visited Country : {visitCountry.length}</h3>
        <ul>
          {visitCountry.map((con) => (
            <li className="list-style" key={country.cca3}>
              {con.name.common}
            </li>
          ))}
        </ul>
        {visitFlag.map((flag) => (
          <img className="img-width" key={flag.cca3l} src={flag.flags.png} />
        ))}
      </div>
      <div className="component-style">
        {country.map((country) => (
          <Country
            key={country.cca3}
            country={country}
            handleState={handleState}
            showHandleFlag={showHandleFlag}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Component;
