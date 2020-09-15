import React from "react";
import "./App.css";
import Header from "./components/header";

function App() {
  return (
    <div className="App" data-test="AppComponent">
      <header className="App-header" data-test="App-header-container">
        <Header/>
      </header>
    </div>
  );
}

export default App;
