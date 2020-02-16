import React from "react";
import { Map } from "./Map";
import { PersonalArea } from "./PersonalArea";
import { Logout } from "./Logout";

function ChoosePage(props) {
  console.log(props);
  return (
    <>
      <h1>Компонента</h1>
      <div>{props.showPage === 0 && <Map />}</div>
      <div>{props.showPage === 1 && <PersonalArea />}</div>
      <div>{props.showPage === 2 && <Logout />}</div>
    </>
  );
}

//export default Header;
export { ChoosePage };
