import React from "react";
import "./index.css";
import numeral from "numeral";
import PropTypes from "prop-types";

function Table({ countries }) {
    return (
        <div className="table" data-test="table">
            {countries.map(({ country, cases }) => (
                <tr key={country}>
                    <td>{country}</td>
                    <td><strong>{numeral(cases).format()}</strong></td>
                </tr>
            ))}
        </div>
    )
}

Table.propTypes = {
    countries: PropTypes.array
};

export default Table;
