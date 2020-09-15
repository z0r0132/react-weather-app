import {
  GET_WEATHER_FORECAST_START,
  GET_WEATHER_FORECAST_SUCCESS,
  GET_WEATHER_FORECAST_ERROR,
} from "../../constants/weatherForecast";

const initialState = { action: "", error: null, data: { list: [] } };

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
    default:
      return state;
  }
}