import React from "react";
import "./FornForPoints.css";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const InnerMap = props => {
  const {
    point,
    handleOfChangePoint,
    listOfObjects,
    nameOfLabel,
    handleClose,
  } = props;
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
      {/*<FormControl className="formControl">
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
            </FormControl>*/}
    </>
  );
};

export default InnerMap;
