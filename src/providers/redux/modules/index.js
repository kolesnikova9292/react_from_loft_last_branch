import { combineReducers } from "redux";
import auth from "./auth";
import bankCard from "./bankCard";
import adresses from "./adresses";
import route from "./routes";

export default combineReducers({
  auth,
  bankCard,
  adresses,
  route,
});
