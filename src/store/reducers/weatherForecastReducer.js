import {
  GET_WEATHER_FORECAST_START,
  GET_WEATHER_FORECAST_SUCCESS,
  GET_WEATHER_FORECAST_ERROR,
  TOGGLE_TEMP_UNITS,
  DATE_CHANGE,
} from "../../constants/weatherForecast";

export const initialState = {
  date: "",
  units: "fahrenheit",
  action: "",
  error: null,
  data: { list: [] },
};

export default function weatherForecastReducer(state = initialState, action) {
  switch (action.type) {
    case GET_WEATHER_FORECAST_START:
      return {
        ...state,
        action: action.type,
      };
    case GET_WEATHER_FORECAST_SUCCESS:
      return {
        ...state,
        action: action.type,
        data: action.payload.data,
      };
    case GET_WEATHER_FORECAST_ERROR:
      return {
        ...state,
        action: action.type,
        error: action.payload.error,
      };
    case TOGGLE_TEMP_UNITS:
      return {
        ...state,
        action: action.type,
        units: action.payload,
      };
    case DATE_CHANGE:
      return {
        ...state,
        action: action.type,
        date: action.payload,
      };
    default:
      return state;
  }
}
