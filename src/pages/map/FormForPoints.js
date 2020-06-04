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
    if (
      localStorage.getItem("first_point") != null &&
      localStorage.getItem("second_point") != null
    ) {
      setFirstPoint(localStorage.getItem("first_point"));
      setSecondPoint(localStorage.getItem("second_point"));
    }
    if (adressList == null) {
      fetchAdresses();
    } else {
      var resultOfMap = adressList.map((x, index) => {
        return { adress: x, key: index };
      });
      setAdressListWithKey(resultOfMap.map(object => ({ ...object })));
      setAdressListWithKeyForFirstPoint(
        resultOfMap.map(object => ({ ...object }))
      );
      setAdressListWithKeyForSecondPoint(
        resultOfMap.map(object => ({ ...object }))
      );
      if (first_point !== "" && first_point != null) {
        setAdressListWithKeyForSecondPoint(
          resultOfMap.filter(function(value) {
            return value.adress !== first_point;
          })
        );
        localStorage.setItem("first_point", first_point);
      }
      if (second_point !== "" && second_point != null) {
        setAdressListWithKeyForFirstPoint(
          resultOfMap.filter(function(value) {
            return value.adress !== second_point;
          })
        );
        localStorage.setItem("second_point", second_point);
      }
    }
  }, [adressList, first_point, second_point]);

  const handleSubmit = event => {
    event.preventDefault();
    getPointsFromForm({ first_point: first_point, second_point: second_point });
  };

  const handleFirstPointChange = event => {
    setFirstPoint(event);
  };

  const handleSecondPointChange = event => {
    setSecondPoint(event);
  };

  return (
    <div className="divForForm">
      <form onSubmit={handleSubmit} className="formWithFields">
        <InnerMap
          point={first_point}
          handleOfChangePoint={handleFirstPointChange}
          listOfObjects={adressListWithKeyForFirstPoint}
          nameOfLabel="Точка А"
          mark="first_point"
        />
        <br />
        <InnerMap
          point={second_point}
          handleOfChangePoint={handleSecondPointChange}
          listOfObjects={adressListWithKeyForSecondPoint}
          nameOfLabel="Точка В"
          mark="second_point"
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
