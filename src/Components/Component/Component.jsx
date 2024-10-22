import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './component.css'
const Component = () => {
    const [country, countryState] = useState([])
    useEffect(()=>{
        fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => countryState(data))
    },[])
    return (
        <div className="component-style">
            {
                country.map(country => <Country key={country.cca3} country={country}></Country>)
            }
        </div>
    );
};

export default Component;