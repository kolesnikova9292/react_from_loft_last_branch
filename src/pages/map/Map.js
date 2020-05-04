import React, { useEffect } from "react";
import MapField from "./MapField";
import { connect } from "react-redux";
import { getToken } from "../../providers/redux/modules/auth";
import {
  getRoute,
  fetchForRouteClean,
} from "../../providers/redux/modules/routes";
import FormForPoints from "./FormForPoints";
import GoToPersonalArea from "./GoToPersonalArea";
import "./FornForPoints.css";
import { getAllCard } from "../../providers/redux/modules/bankCard/selectors";
import { fetchBankCardInformation } from "../../providers/redux/modules/bankCard";
import { fetchForRoute } from "../../providers/redux/modules/routes";

const Map = props => {
  const {
    token,
    bankCard,
    fetchBankCardInformation,
    fetchForRoute,
    fetchForRouteClean,
    route,
  } = props;
  localStorage.setItem("accessToken", token);

  async function fetchBankCardData() {
    await fetchBankCardInformation(token);
  }

  useEffect(() => {
    fetchBankCardData();
  }, [bankCard]);

  const fetchForRouteRequest = async point => {
    await fetchForRouteClean();
    await fetchForRoute(point);
  };

  const getPointsFromForm = async point => {
    console.log(point);
    fetchForRouteRequest(point);
  };

  console.log(route);

  return (
    <div className="main">
      <MapField />
      <div className="divForFormOuter">
        {bankCard.number != null && bankCard.cvc != null ? (
          <FormForPoints getPointsFromForm={getPointsFromForm} />
        ) : (
          <GoToPersonalArea />
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    token: getToken(state),
    bankCard: getAllCard(state),
    route: getRoute(state),
  };
};

const mapDispatchToProps = {
  fetchBankCardInformation,
  fetchForRoute,
  fetchForRouteClean,
};

export default connect(mapStateToProps, mapDispatchToProps)(Map);
