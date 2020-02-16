import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./header/Header";
import { ChoosePage } from "./pages/ChoosePage";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      //showMap: false
      showPage: 0
    };
    this.showMapEvent = this.showMapEvent.bind(this);
  }

  /*showMapEvent(e) {
    console.log(11111);
    this.setState({ showMap: true });
  }*/

  showMapEvent(e) {
    console.log(11111);
    const idOfButton = e.target.id;
    switch (idOfButton) {
      case "my-map":
        this.setState({ showPage: 0 });
        break;
      case "personal-area":
        this.setState({ showPage: 1 });
        break;
      case "logout":
        this.setState({ showPage: 2 });
        break;
      default:
        break;
    }
    //console.log(qwe);

    //this.setState({ showMap: true });
  }

  render() {
    return (
      <>
        <Header showMapEvent={this.showMapEvent} />
        <ChoosePage showPage={this.state.showPage} />
      </>
    );
  }
}

/*function App() {
  //console.log({ children });
  return (
    <div>
      <Header />
      <ChoosePage />
    </div>
  );
}*/

export default App;
