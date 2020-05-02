import { combineReducers } from "redux";
import auth from "./auth";
import bankCard from "./bankCard";
import adresses from "./adresses";

export default combineReducers({
  auth,
  bankCard,
  adresses,
});
