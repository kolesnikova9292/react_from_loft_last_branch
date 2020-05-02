import React from "react";
import Button from "@material-ui/core/Button";

const GoToPersonalArea = () => {
  return (
    <div className="divForForm">
      <div className="warning">
        Перейдите в профиль и заполните данные карты
      </div>
      <Button
        value="Перейти в профиль"
        className="buttonForWarning"
        variant="contained"
        color="primary"
        href="/personal"
      >
        Перейти в профиль
      </Button>
    </div>
  );
};

export default GoToPersonalArea;
