import React from "react";
import { Map } from "./map/Map";
import { PersonalArea } from "./personal_area/PersonalArea";
import { Login } from "./login";
import { Registration } from "./registration";

export const ChoosePage = ({ showPage, showMapEvent }) => {
  return (
    <>
      <div>{showPage === 0 && <Map />}</div>
      <div>{showPage === 1 && <PersonalArea />}</div>
      <div>
        {showPage === 2 && (
          <Login showMapEvent={showMapEvent} alreadyLoggedIn={true} />
        )}
      </div>
      <div>
        {showPage === 3 && <Registration showMapEvent={showMapEvent} />}
      </div>
      <div>
        {showPage === 4 && (
          <Login showMapEvent={showMapEvent} alreadyLoggedIn={false} />
        )}
      </div>
    </>
  );
};
