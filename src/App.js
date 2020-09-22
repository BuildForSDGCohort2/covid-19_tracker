import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/header";
import InfoBox from "./components/infobox";
import Map from "./components/map";
import Table from "./components/table";
import { Card, CardContent } from "@material-ui/core";
import Graph from "./components/graph";
import { sortData } from "./utils";

function App() {

  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then(response => response.json())
      .then(data => {
        setCountryInfo(data);
      })
  }, []);
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

          const sortedData = sortData(data);
          setTableData(sortedData);
          setCountries(countries);
        });
    };
    getCountriesData();
  }, []);

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;
    setCountry(countryCode);

    const url = countryCode === "worldwide" ? "https://disease.sh/v3/covid-19/all" :
      `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    await fetch(url)
      .then(response => response.json())
      .then(data => {
        setCountry(countryCode);
        setCountryInfo(data);
      });
  };

  return (
    <div className="App" data-test="AppComponent">
      <div className="app__left">
        <div className="app__header" data-test="App-header-container">
          <Header country={country} countries={countries} onCountryChange={onCountryChange} />
        </div>
        <div className="app_stats" data-test="app_stats_container">
          <InfoBox title="Coronavirus cases" total={countryInfo.cases} cases={countryInfo.todayCases} />
          <InfoBox title="Recovered" total={countryInfo.recovered} cases={countryInfo.todayRecovered} />
          <InfoBox title="Deaths" total={countryInfo.deaths} cases={countryInfo.todayDeaths} />
        </div>
        <Map />
      </div>

      <Card className="app__right">
        <CardContent>
          <h3>Live cases by country</h3>
          <Table countries={tableData} />
          <h3>Worldwide new cases</h3>
          <Graph />
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
