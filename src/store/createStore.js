import { combineReducers, configureStore } from "@reduxjs/toolkit";
import carsReducer from "./cars";

const rootReducer = combineReducers({
  cars: carsReducer,
});
export default function createStore() {
  return configureStore({ reducer: rootReducer });
}
