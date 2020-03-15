import React from "react";
import { MapField } from "./MapField";
import { connect } from "react-redux";
import { getToken } from "../../providers/redux/modules/auth";

const Map = props => {
  const { token } = props;
  localStorage.setItem("accessToken", token);
  return (
    <>
      <MapField />
    </>
  );
};

const mapStateToProps = state => {
  return {
    token: getToken(state),
  };
};

export default connect(mapStateToProps)(Map);
