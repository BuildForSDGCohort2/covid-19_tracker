import React from "react";
import "./App.css";
import Header from "./components/header";

function App() {
  return (
    <div className="App" data-test="AppComponent">
      <div className="app__header" data-test="App-header-container">
        <Header />
      </div>
    </div>
  );
}

export default App;
