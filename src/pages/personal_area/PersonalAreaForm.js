import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import "./PersonalArea.css";

const PersonalAreaForm = () => {
  const { cardNumber, setCardNumber } = useState("");
  const { validity, setValidity } = useState("");
  const { owner, setOwner } = useState("");
  const { cvc, setCVC } = useState("");
  const handleCardParams = async event => {};

  const handleChangeCardNumber = event => {};

  const handleChangeCardValidity = event => {};

  const handleChangeCardOwner = event => {};

  const handleChangeCardCVC = event => {};

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
                value={cardNumber}
                name="cardNumber"
                onChange={handleChangeCardNumber}
                className="textField"
                required
              />
              <TextField
                label="Срок действия"
                color="secondary"
                type="text"
                name="validity"
                value={validity}
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

  /*return (
    <div className="divForFormPersonal">
      <div className="divForFormPersonalChild">
        <Card>
          <TextField
            label="Номер карты"
            color="secondary"
            type="text"
            value={cardNumber}
            name="cardNumber"
            onChange={handleChangeCardNumber}
          />
          <TextField
            label="Срок действия"
            color="secondary"
            type="text"
            name="validity"
            value={validity}
            onChange={handleChangeCardValidity}
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
          />
          <TextField
            label="CVC"
            color="secondary"
            type="text"
            name="cvc"
            value={cvc}
            onChange={handleChangeCardCVC}
          />
        </Card>
      </div>
      <Button type="submit" value="Войти">
        Войти
      </Button>
    </div>
  );*/
};

const mapDispatchToProps = {};

export default connect(null, mapDispatchToProps)(PersonalAreaForm);

//<form onSubmit={handleCardParams}></form>
