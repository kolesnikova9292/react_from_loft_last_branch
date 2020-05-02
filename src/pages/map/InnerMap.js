import React from "react";
import "./FornForPoints.css";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";

const InnerMap = props => {
  const { point, handleOfChangePoint, listOfObjects, nameOfLabel } = props;
  return (
    <>
      <FormControl className="formControl">
        <InputLabel>{nameOfLabel}</InputLabel>
        <Select value={point} onChange={handleOfChangePoint}>
          {listOfObjects != null
            ? listOfObjects.map(adress => (
                <MenuItem value={adress.adress} key={adress.key}>
                  {adress.adress}
                </MenuItem>
              ))
            : null}
        </Select>
      </FormControl>
      <br />
    </>
  );
};

export default InnerMap;
