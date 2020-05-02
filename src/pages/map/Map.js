import React from "react";
import { MapField } from "./MapField";
import { connect } from "react-redux";
import { getToken } from "../../providers/redux/modules/auth";
import FormForPoints from "./FormForPoints";
import "./FornForPoints.css";

const Map = props => {
  const { token } = props;
  localStorage.setItem("accessToken", token);
  return (
    <div className="main">
      <MapField />
      <div className="divForFormOuter">
        <FormForPoints getPointsFromForm={getPointsFromForm} />
      </div>
    </div>
  );
};

const getPointsFromForm = point => {
  console.log(111);
  console.log(point);
};

const mapStateToProps = state => {
  return {
    token: getToken(state),
  };
};

export default connect(mapStateToProps)(Map);
