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
  //const [cardNumber, setCardNumber] = useState("");
  /*const [validityInputForm, setValidity] = useState("");
  const [ownerInputForm, setOwner] = useState("");
  const [cvcInputForm, setCVC] = useState("");*/
  const {
    register,
    handleSubmit,
    errors,
    reset,
    setValue,
  } = useForm(/*{
    defaultValues: {
      cardNumber: cardNumber,
      validity: validity,
      owner: owner,
      cvc: cvc,
    },
  }*/);

  async function fetchBankCardData() {
    await fetchBankCardInformation(token);
  }

  useEffect(() => {
    if (cardNumber == null) {
      fetchBankCardData();
    }
    //register({ cardNumber: cardNumber });
    setValue("cardNumber", cardNumber);
    setValue("validity", validity);
    setValue("owner", owner);
    setValue("cvc", cvc);
    /*reset(
      {
        cardNumber: cardNumber,
        validity: validity,
        owner: owner,
        cvc: cvc,
      },
      {
        touched: true,
      }
    );*/

    /*if (cardNumber != null) setCardNumber(cardNumber);
    if (validity != null) setValidity(validity);
    if (owner != null) setOwner(owner);
    if (cvc != null) setCVC(cvc);*/
    console.log(cardNumber);
  }, [cardNumber, validity, owner, cvc, reset, setValue]);

  const handleCardParams = async data => {
    //event.preventDefault();
    const { cardNumber, validity, owner, cvc } = data;
    console.log(cardNumber, validity, owner, cvc);
    await fetchRegistrateMyBankCard({
      cardNumber,
      validity,
      owner,
      cvc,
      token,
    });
    props.history.push("/personal");
  };

  /* const handleChangeCardNumber = event => {
    setCardNumber(event.target.value);
  };*/

  /*const handleChangeCardNumber = event => {
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
  };*/

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
              />
              {/*<TextField
                label="Номер карты"
                color="secondary"
                type="text"
                name="cardNumber"
                className="textField"
                error={errors.cardNumber != null ? true : false}
                inputRef={register({ required: true })}
                defaultValue={cardNumber}
                onChange={([event]) => event.target.value}

                //defaultValue={cardNumber != null ? cardNumber : null}
              />
              <TextField
                label="Срок действия"
                color="secondary"
                type="text"
                name="validity"
                className="textField"
                error={errors.validity != null ? true : false}
                inputRef={register({ required: true })}
              />*/}
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
              />
              {/*<TextField
                label="Имя владельца"
                color="secondary"
                type="text"
                name="owner"
                className="textField"
                error={errors.owner != null ? true : false}
                inputRef={register({ required: true })}
              />
              <TextField
                label="CVC"
                color="secondary"
                type="text"
                name="cvc"
                className="textField"
                error={errors.cvc != null ? true : false}
                inputRef={register({ required: true })}
              />*/}
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
