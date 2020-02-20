import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./header/Header";
import { ChoosePage } from "./pages/ChoosePage";
import { CountProvider } from "./providers/AuthContext";

const App = () => {
  const [showPage, setShowPage] = useState(0);

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
      default:
        break;
    }
  };

  return (
    <>
      <CountProvider>
        <Header showMapEvent={showMapEvent} />
        <ChoosePage showPage={showPage} showMapEvent={showMapEvent} />
      </CountProvider>
    </>
  );
};

export default App;
