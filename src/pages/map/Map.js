import React, { useEffect } from "react";
import { MapField } from "./MapField";
import { connect } from "react-redux";
import { getToken } from "../../providers/redux/modules/auth";
import FormForPoints from "./FormForPoints";
import GoToPersonalArea from "./GoToPersonalArea";
import "./FornForPoints.css";
import { getAllCard } from "../../providers/redux/modules/bankCard/selectors";
import { fetchBankCardInformation } from "../../providers/redux/modules/bankCard";

const Map = props => {
  const { token, bankCard, fetchBankCardInformation } = props;
  localStorage.setItem("accessToken", token);
  console.log(bankCard);

  async function fetchBankCardData() {
    await fetchBankCardInformation(token);
  }

  useEffect(() => {
    console.log(bankCard);
    fetchBankCardData();
    console.log(bankCard);
  }, [bankCard]);
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

const getPointsFromForm = point => {
  console.log(111);
  console.log(point);
};

const mapStateToProps = state => {
  return {
    token: getToken(state),
    bankCard: getAllCard(state),
  };
};

const mapDispatchToProps = {
  fetchBankCardInformation,
};

export default connect(mapStateToProps, mapDispatchToProps)(Map);
