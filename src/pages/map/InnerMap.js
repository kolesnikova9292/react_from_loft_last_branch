import React from "react";
import "./FornForPoints.css";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const InnerMap = props => {
  const { point, handleOfChangePoint, listOfObjects, nameOfLabel } = props;

  return (
    <>
      <Autocomplete
        id="combo-box-demo"
        options={listOfObjects}
        getOptionLabel={option => option.adress}
        style={{ width: 300 }}
        renderInput={params => (
          <TextField {...params} label={nameOfLabel} variant="outlined" />
        )}
        onChange={handleOfChangePoint}
      />
    </>
  );
};

export default InnerMap;
