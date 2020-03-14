import React from "react";
import { MapField } from "./MapField";
import { connect } from "react-redux";

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
    token: state.token,
  };
};

export default connect(mapStateToProps)(Map);
