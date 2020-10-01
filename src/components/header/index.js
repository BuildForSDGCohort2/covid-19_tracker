import React from "react";
import PropTypes from "prop-types";
import { FormControl, Select, MenuItem } from "@material-ui/core";

const Header = ({ country, onCountryChange, countries }) => {
    return (
        <>
            <h1>COVID-19 TRACKER</h1>
            <FormControl className="app__dropdown" data-test="formcontrol">
                <Select variant="outlined" onChange={onCountryChange} value={country} data-test="dropdown">
                    <MenuItem value="worldwide" data-test="menuitem">Worldwide</MenuItem>
                    {/* Loop through all the countries and show a dropdown list of the options */}
                    {countries.map((country) => (
                        <MenuItem key={country.value} value={country.value}>{country.name}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </>
    );
};

Header.propTypes = {
    country: PropTypes.string,
    countries: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        value: PropTypes.string
    })),
    onCountryChange: PropTypes.func
};

export default Header;