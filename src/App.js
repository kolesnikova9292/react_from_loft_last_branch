import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Header from "./header/Header";
import ChoosePage from "./pages/ChoosePage";
import { AuthProvider } from "./providers/AuthContext";
import { connect } from "react-redux";
import { getAuthRequest } from "./providers/redux/actions";

const App = () => {
  const [showPage, setShowPage] = useState(
    //localStorage.getItem("accessToken") === null ? 4 : 2
    4
  );

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

/*const mapStateToProps = state => state;
const mapDispatchToProps = { getAuthRequest };

export default connect(mapStateToProps, mapDispatchToProps)(App);*/
