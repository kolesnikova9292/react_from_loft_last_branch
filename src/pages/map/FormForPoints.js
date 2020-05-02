import React, { useState, useEffect } from "react";
import "./FornForPoints.css";
import Button from "@material-ui/core/Button";
import { getAdresses } from "../../providers/redux/modules/adresses";
import { connect } from "react-redux";
import { fetchForListOfAdresses } from "../../providers/redux/modules/adresses";
import InnerMap from "./InnerMap";

const FormForPoints = props => {
  const [first_point, setFirstPoint] = useState("");
  const [second_point, setSecondPoint] = useState("");
  const [adressListWithKey, setAdressListWithKey] = useState([]);
  const [
    adressListWithKeyForFirstPoint,
    setAdressListWithKeyForFirstPoint,
  ] = useState([]);
  const [
    adressListWithKeyForSecondPoint,
    setAdressListWithKeyForSecondPoint,
  ] = useState([]);

  const { getPointsFromForm, adressList, fetchForListOfAdresses } = props;

  async function fetchAdresses() {
    await fetchForListOfAdresses();
  }

  useEffect(() => {
    if (adressList == null) {
      fetchAdresses();
    } else {
      var resultOfMap = adressList.map((x, index) => {
        return { adress: x, key: index };
      });
      setAdressListWithKey(resultOfMap);
      setAdressListWithKeyForFirstPoint(
        resultOfMap.map(object => ({ ...object }))
      );
      setAdressListWithKeyForSecondPoint(
        resultOfMap.map(object => ({ ...object }))
      );
    }
  }, [adressList]);

  const handleSubmit = event => {
    event.preventDefault();
    getPointsFromForm({ first_point: first_point, second_point: second_point });
  };

  const handleFirstPointChange = event => {
    console.log(8484848484848484);
    setFirstPoint(event.target.innerHTML);
    console.log(event.target.innerHTML);
    setAdressListWithKeyForSecondPoint(
      removeItemOnce(adressListWithKeyForSecondPoint, event.target.innerHTML)
    );
  };

  const handleSecondPointChange = event => {
    setSecondPoint(event.target.innerHTML);
    setAdressListWithKeyForFirstPoint(
      removeItemOnce(adressListWithKeyForFirstPoint, event.target.innerHTML)
    );
  };

  function removeItemOnce(arr, value) {
    var choosenItem = arr.find(x => x.adress === value);
    var index = arr.indexOf(choosenItem);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }

  return (
    <div className="divForForm">
      <form onSubmit={handleSubmit} className="formWithFields">
        <InnerMap
          point={first_point}
          handleOfChangePoint={handleFirstPointChange}
          listOfObjects={adressListWithKeyForFirstPoint}
          nameOfLabel="Точка А"
        />
        <br />
        <InnerMap
          point={second_point}
          handleOfChangePoint={handleSecondPointChange}
          listOfObjects={adressListWithKeyForSecondPoint}
          nameOfLabel="Точка В"
        />

        <Button
          type="submit"
          value="Рассчитать маршрут"
          className="buttonForForm"
        >
          Рассчитать маршрут
        </Button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    adressList: getAdresses(state),
  };
};

const mapDispatchToProps = {
  fetchForListOfAdresses,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormForPoints);
