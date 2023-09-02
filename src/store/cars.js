import { createSlice } from "@reduxjs/toolkit";
// import httpService from "../services/http.service";
import carsBrands from "../initialData/carsBrands.json";

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    entities: {
      brands: carsBrands,
    },
    errors: null,
    isLoading: false,
  },
  reducers: {
    carsLoad: (state) => {
      state.isLoading = true;
    },
    carsLoaded: (state) => {
      state.isLoading = false;
    },
    carsLoadFailed: (state, action) => {
      state.errors = action.payload;
    },
  },
});

const { reducer: carsReducer, actions } = carsSlice;
const { carsLoad, carsLoadFailed } = actions;

export const loadCars = () => async (dispatch) => {
  dispatch(carsLoad());
  try {
    // const { data } = httpService.get();
  } catch (error) {
    dispatch(carsLoadFailed(error));
  }
};

export const getCarsBrands = () => (state) => {
  // console.log(state);
  return state.cars.entities.brands;
};

export default carsReducer;
