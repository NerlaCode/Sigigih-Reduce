import { configureStore } from "@reduxjs/toolkit";
import AccountReducer from "./account-slice";
import accountReducer from "./account-reducer";

export default configureStore({
  reducer: {
    account: AccountReducer
  }
  // devTools: true
});
