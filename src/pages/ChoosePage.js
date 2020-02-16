import React from "react";
import { Map } from "./Map";
import { PersonalArea } from "./PersonalArea";
import { Login } from "./Login";

function ChoosePage(props) {
  console.log(props);
  return (
    <>
      <h1>Компонента</h1>
      <div>{props.showPage === 0 && <Map />}</div>
      <div>{props.showPage === 1 && <PersonalArea />}</div>
      <div>
        {props.showPage === 2 && <Login showMapEvent={props.showMapEvent} />}
      </div>
    </>
  );
}

//export default Header;
export { ChoosePage };
