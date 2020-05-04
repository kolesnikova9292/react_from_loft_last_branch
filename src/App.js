import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Header from "./header/Header";
import ChoosePage from "./pages/ChoosePage";

const App = () => {
  const [showPage, setShowPage] = useState(4);

  const showMapEvent = idOfButton => {
    switch (idOfButton) {
      case "my-map":
        setShowPage(0);
        break;
      case "personal-area":
        setShowPage(1);
        break;
      case "logout":
        setShowPage(2);
        break;

      case "registration":
        setShowPage(3);
        break;
      case "login":
        setShowPage(4);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <BrowserRouter>
        <Header />
        <ChoosePage />
      </BrowserRouter>
    </>
  );
};

export default App;
