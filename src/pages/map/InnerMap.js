import React, { useEffect } from "react";
import "./FornForPoints.css";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const InnerMap = props => {
  const {
    point,
    handleOfChangePoint,
    listOfObjects,
    nameOfLabel,
    mark,
  } = props;

  const [pointMy, setPointMy] = React.useState("");

  const [value, setValue] = React.useState("");
  const [inputValue, setInputValue] = React.useState("");

  useEffect(() => {
    if (pointMy === "") {
      setPointMy(point);
    }
    if (pointMy != null) {
      setValue(pointMy);
      setInputValue(pointMy);
    }

    if (listOfObjects.map(x => x.adress).indexOf(pointMy) !== -1) {
      localStorage.setItem(mark, pointMy);
      handleOfChangePoint(pointMy);
    }
  }, [point, pointMy]);

  return (
    <>
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          setPointMy(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
          setPointMy(newInputValue);
        }}
        id="combo-box-demo"
        options={listOfObjects.map(x => x.adress)}
        style={{ width: 300 }}
        renderInput={params => (
          <TextField {...params} label={nameOfLabel} variant="outlined" />
        )}
      />
    </>
  );
};

export default InnerMap;
