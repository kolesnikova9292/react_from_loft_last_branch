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
import { useForm } from "react-hook-form";
import { RHFInput } from "react-hook-form-input";
import Snackbar from "@material-ui/core/Snackbar";

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

  const { register, handleSubmit, errors, reset, setValue } = useForm();

  const [open, setOpen] = useState(false);
  const [flag, setFlag] = useState(false);
  const [messageFromServer, setMessageFromServer] = useState("");

  async function fetchBankCardData() {
    await fetchBankCardInformation(token);
  }

  useEffect(() => {
    if (cardNumber == null) {
      console.log(888);
      fetchBankCardData();
    }
    setValue("cardNumber", cardNumber);
    setValue("validity", validity);
    setValue("owner", owner);
    setValue("cvc", cvc);
    if (flag === true) {
      if (cardNumber.length > 0 && validity.length > 0) {
        setMessageFromServer("Регистрация банковской карты прошла успешно");
        setOpen(true);
      } else {
        setMessageFromServer("Не удалось зарегистрировать банковскую карту");
        setOpen(true);
      }
    }
  }, [cardNumber, validity, owner, cvc, reset, setValue]);

  const handleCardParams = async data => {
    const { cardNumber, validity, owner, cvc } = data;

    setFlag(true);

    await fetchRegistrateMyBankCard({
      cardNumber,
      validity,
      owner,
      cvc,
      token,
    });
    props.history.push("/personal");
  };

  const handleCloseSnackBar = () => {
    setOpen(false);
  };

  const cardNumderChanging = e => {
    const { value } = e.target;

    if (!value) {
      e.target.value = "";
    }
    const match =
      value
        .replace(/\D/g, "")
        .substring(0, 16)
        .match(/.{1,4}/g) || [];
    e.target.value = match.join(" ");
    setValue("cardNumber", e.target.value);
  };

  const validityChanging = e => {
    const { value } = e.target;
    if (!value) {
      e.target.value = "";
    }
    const match =
      value
        .replace(/\D/g, "")
        .substring(0, 4)
        .match(/.{1,2}/g) || [];
    e.target.value = match.join("/");
    setValue("validity", e.target.value);
  };

  const ownerChanging = e => {
    const { value } = e.target;
    if (!value) {
      e.target.value = "";
    }
    const match = value.replace(/\d/g, "").toUpperCase();

    setValue("owner", match);
  };

  const cvcChanging = e => {
    const { value } = e.target;
    if (!value) {
      e.target.value = "";
    }
    const match = value.replace(/\D/g, "").substring(0, 3);
    setValue("cvc", match);
  };

  return (
    <div className="commonDiv">
      <form className="myForm" onSubmit={handleSubmit(handleCardParams)}>
        <div className="divForFormPersonal">
          <div className="divForFormPersonalChild">
            <Card>
              <RHFInput
                as={
                  <TextField
                    label="Номер карты"
                    color="secondary"
                    type="text"
                    className="textField"
                    error={errors.cardNumber != null ? true : false}
                  />
                }
                onChange={cardNumderChanging}
                rules={{
                  required: true,
                  pattern: /^\d{4} \d{4} \d{4} \d{4}$/i,
                }}
                helperText={returnError(errors.cardNumber)}
                name="cardNumber"
                register={register}
                setValue={setValue}
                data-testid="test_cardNumber_field"
              />
              <RHFInput
                as={
                  <TextField
                    label="Срок действия"
                    color="secondary"
                    type="text"
                    className="textField"
                    error={errors.validity != null ? true : false}
                  />
                }
                rules={{
                  required: true,
                  pattern: /^(0[1-9]|1[0-2])\/([0-9]{2})$/i,
                }}
                helperText={returnError(errors.validity)}
                name="validity"
                onChange={validityChanging}
                register={register}
                setValue={setValue}
                data-testid="test_validity_field"
              />
            </Card>
          </div>
          <div className="divForFormPersonalChild">
            <Card>
              <RHFInput
                as={
                  <TextField
                    label="Имя владельца"
                    color="secondary"
                    type="text"
                    className="textField"
                    error={errors.owner != null ? true : false}
                  />
                }
                onChange={ownerChanging}
                rules={{ required: true, pattern: /^[A-Z]* [A-Z]*$/i }}
                helperText={returnError(errors.owner)}
                name="owner"
                register={register}
                setValue={setValue}
                data-testid="test_owner_field"
              />
              <RHFInput
                as={
                  <TextField
                    label="CVC"
                    color="secondary"
                    type="text"
                    className="textField"
                    error={errors.cvc != null ? true : false}
                  />
                }
                onChange={cvcChanging}
                rules={{ required: true, pattern: /^\d{3}$/i }}
                helperText={returnError(errors.cvc)}
                name="cvc"
                register={register}
                setValue={setValue}
                data-testid="test_cvc_field"
              />
            </Card>
          </div>
        </div>
        <Button type="submit" value="Войти" className="myButton">
          СОХРАНИТЬ
        </Button>
      </form>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        open={open}
        onClose={handleCloseSnackBar}
        ContentProps={{
          "aria-describedby": "message-id",
        }}
        message={<span id="message-id">{messageFromServer}</span>}
      />
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

export function returnError(error) {
  return error !== undefined && error.type === "required"
    ? "Поле обязательно"
    : error !== undefined && error.type === "pattern"
    ? "Недопустимый формат"
    : null;
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonalAreaForm);
