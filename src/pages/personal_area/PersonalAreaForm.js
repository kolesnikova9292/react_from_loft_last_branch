import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import "./PersonalArea.css";
import {
  fetchBankCardInformation,
  fetchRegistrateMyBankCard,
} from "../../providers/redux/modules/bankCard";
import { getToken } from "../../providers/redux/modules/auth";
import { getCardNumber } from "../../providers/redux/modules/bankCard";

const PersonalAreaForm = props => {
  const {
    fetchRegistrateMyBankCard,
    token,
    fetchBankCardInformation,
    cardNumber,
  } = props;
  const [cardNumberInputForm, setCardNumber] = useState("");
  const [validity, setValidity] = useState("");
  const [owner, setOwner] = useState("");
  const [cvc, setCVC] = useState("");

  async function fetchBankCardData() {
    await fetchBankCardInformation(token);
    console.log(cardNumber);
    /*const res = await fetch("https://swapi.co/api/planets/4/");
    res
      .json()
      .then(res => setPlanets(res))
      .catch(err => setErrors(err));*/
  }

  useEffect(() => {
    fetchBankCardData();
  });

  const handleCardParams = async event => {
    event.preventDefault();
    await fetchRegistrateMyBankCard({
      cardNumberInputForm,
      validity,
      owner,
      cvc,
      token,
    });
    props.history.push("/personal");
  };

  const handleChangeCardNumber = event => {
    setCardNumber(event.target.value);
  };

  const handleChangeCardValidity = event => {
    setValidity(event.target.value);
  };

  const handleChangeCardOwner = event => {
    setOwner(event.target.value);
  };

  const handleChangeCardCVC = event => {
    setCVC(event.target.value);
  };

  return (
    <div className="commonDiv">
      <form onSubmit={handleCardParams} className="myForm">
        <div className="divForFormPersonal">
          <div className="divForFormPersonalChild">
            <Card>
              <TextField
                label="Номер карты"
                color="secondary"
                type="text"
                value={cardNumberInputForm}
                name="cardNumberInputForm"
                onChange={handleChangeCardNumber}
                className="textField"
                required
              />
              <TextField
                label="Срок действия"
                color="secondary"
                type="text"
                value={validity}
                name="validity"
                onChange={handleChangeCardValidity}
                className="textField"
                required
              />
            </Card>
          </div>
          <div className="divForFormPersonalChild">
            <Card>
              <TextField
                label="Имя владельца"
                color="secondary"
                type="text"
                value={owner}
                name="owner"
                onChange={handleChangeCardOwner}
                className="textField"
                required
              />
              <TextField
                label="CVC"
                color="secondary"
                type="text"
                name="cvc"
                value={cvc}
                onChange={handleChangeCardCVC}
                className="textField"
                required
              />
            </Card>
          </div>
        </div>
        <Button type="submit" value="Войти" className="myButton">
          СОХРАНИТЬ
        </Button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    token: getToken(state),
    cardNumber: getCardNumber(state),
  };
};

const mapDispatchToProps = {
  fetchRegistrateMyBankCard,
  fetchBankCardInformation,
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonalAreaForm);

//<form onSubmit={handleCardParams}></form>
