import React, { Component } from "react";
import "./App.css";
import Children from "./components/children";
import Eventos from "./components/eventos";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Children mensaje='Esto es un mensaje'>
          <ul>
            <li>lista 1</li>
            <li>lista 2</li>
            <li>lista 3</li>
          </ul>
          <h1>Esto un titulo</h1>
        </Children>
        <Eventos/>
      </div>
    );
  }
}

export default App;
