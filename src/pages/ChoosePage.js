import React from "react";
import { Map } from "./map/Map";
import { PersonalArea } from "./personal_area/PersonalArea";
import { Login } from "./login";
import { Registration } from "./Registration";

export const ChoosePage = ({ showPage, showMapEvent }) => {
  //console.log(props);
  return (
    <>
      <h1>Компонента</h1>
      <div>{showPage === 0 && <Map />}</div>
      <div>{showPage === 1 && <PersonalArea />}</div>
      <div>{showPage === 2 && <Login showMapEvent={showMapEvent} />}</div>
      <div>
        {showPage === 3 && <Registration showMapEvent={showMapEvent} />}
      </div>
    </>
  );
};

//export default Header;
//export { ChoosePage };
