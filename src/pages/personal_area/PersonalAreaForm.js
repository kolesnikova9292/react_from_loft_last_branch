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
import {
  getCardNumber,
  getCardValidity,
  getCardOwner,
  getCardCVC,
} from "../../providers/redux/modules/bankCard";

const PersonalAreaForm = props => {
  const {
    fetchRegistrateMyBankCard,
    token,
    fetchBankCardInformation,
    cardNumber,
    validity,
    owner,
    cvc,
  } = props;
  const [cardNumberInputForm, setCardNumber] = useState("");
  const [validityInputForm, setValidity] = useState("");
  const [ownerInputForm, setOwner] = useState("");
  const [cvcInputForm, setCVC] = useState("");

  async function fetchBankCardData() {
    await fetchBankCardInformation(token);
  }

  useEffect(() => {
    if (cardNumber == null) {
      fetchBankCardData(); /*.then(() => {
        if (cardNumber != null) setCardNumber(cardNumber);
        if (validity != null) setValidity(validity);
        if (owner != null) setOwner(owner);
        if (cvc != null) setCVC(cvc);
      });*/
    }
    if (cardNumber != null) setCardNumber(cardNumber);
    if (validity != null) setValidity(validity);
    if (owner != null) setOwner(owner);
    if (cvc != null) setCVC(cvc);
  }, [cardNumber, validity, owner, cvc]);

  const handleCardParams = async event => {
    event.preventDefault();
    await fetchRegistrateMyBankCard({
      cardNumberInputForm,
      validityInputForm,
      ownerInputForm,
      cvcInputForm,
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
                value={validityInputForm}
                name="validityInputForm"
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
                value={ownerInputForm}
                name="ownerInputForm"
                onChange={handleChangeCardOwner}
                className="textField"
                required
              />
              <TextField
                label="CVC"
                color="secondary"
                type="text"
                name="cvcInputForm"
                value={cvcInputForm}
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
    validity: getCardValidity(state),
    owner: getCardOwner(state),
    cvc: getCardCVC(state),
  };
};

const mapDispatchToProps = {
  fetchRegistrateMyBankCard,
  fetchBankCardInformation,
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonalAreaForm);

//<form onSubmit={handleCardParams}></form>
