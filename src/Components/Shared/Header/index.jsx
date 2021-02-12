import React from "react";
import logo from "../../../../src/logo.svg";

export const Header = () => (
  <div className="header-wrap">
    <header className="App-header">
    <ul>
        <li>
          <a href="/">Flight Booking Test</a>
        </li>
      </ul>
     
      <div className="logo-wrap">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </header>
  </div>
);
