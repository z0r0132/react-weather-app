import { combineReducers } from "redux";

import weatherForecastReducer from "./weatherForecastReducer";

const reducers = combineReducers({
  weatherForecast: weatherForecastReducer,
});

export default reducers;
