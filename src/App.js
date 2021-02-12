import React, { Component } from "react";
import { Header } from "./Components/Shared/Header/";
import { Footer } from "./Components/Shared/Footer/";
import FlightBooking from "../src/Components/Home/contener";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
          <FlightBooking />
        <Footer />
      </div>
    );
  }
}

export default App;
