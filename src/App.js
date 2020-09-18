import React from "react";
import "./App.css";
import Header from "./components/header";
import InfoBox from "./components/infobox";

function App() {
  return (
    <div className="App" data-test="AppComponent">
      <div className="app__header" data-test="App-header-container">
        <Header />
      </div>
      <div className="app_stats" data-test="app_stats_container">
        <InfoBox title="Coronavirus cases" total={200} cases={122}/>
        <InfoBox title="Recovered" total={300} cases={22}/>
        <InfoBox title="Deaths" total={30} cases={67}/>
      </div>
    </div>
  );
}

export default App;
