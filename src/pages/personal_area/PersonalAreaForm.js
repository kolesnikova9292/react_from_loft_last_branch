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

  async function fetchBankCardData() {
    await fetchBankCardInformation(token);
  }

  useEffect(() => {
    if (cardNumber == null) {
      fetchBankCardData();
    }
    setValue("cardNumber", cardNumber);
    setValue("validity", validity);
    setValue("owner", owner);
    setValue("cvc", cvc);
  }, [cardNumber, validity, owner, cvc, reset, setValue]);

  const handleCardParams = async data => {
    const { cardNumber, validity, owner, cvc } = data;
    await fetchRegistrateMyBankCard({
      cardNumber,
      validity,
      owner,
      cvc,
      token,
    });
    props.history.push("/personal");
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
                rules={{ required: true }}
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
                rules={{ required: true }}
                name="validity"
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
                rules={{ required: true }}
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
                rules={{ required: true }}
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
