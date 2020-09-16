import React, { useState, useEffect } from "react";
import { FormControl, Select, MenuItem } from "@material-ui/core";

const Header = () => {
    const [countries, setCountries] = useState([]);
    const [country,setCountry] = useState("worldwide");
    useEffect(() => {
        const getCountriesData = async () => {
            await fetch("https://disease.sh/v3/covid-19/countries")
                .then((response) => response.json())
                .then((data) => {
                    const countries = data.map((country) => (
                        {
                            name: country.country,
                            value: country.countryInfo.iso2
                        }
                    ));

                    setCountries(countries);
                });
        };
        getCountriesData();
    }, []);

    const onCountryChange = async (event) => {
        const countryCode = event.target.value;
        setCountry(countryCode);
    };

    return (
        <>
            <h1>COVID-19 TRACKER</h1>
            <FormControl className="app__dropdown" data-test="formcontrol">
                <Select variant="outlined" onChange={onCountryChange} value={country} data-test="dropdown">
                    <MenuItem value="worldwide" data-test="menuitem">Worldwide</MenuItem>
                    {/* Loop through all the countries and show a dropdown list of the options */}
                    {countries.map((country) => (
                        <MenuItem value={country.value}>{country.name}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </>
    );
};

export default Header;