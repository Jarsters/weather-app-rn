import { FORECAST_FAILED, FORECAST_LOADING, FORECAST_SUCCESS } from "../../constants/weatherActions";

const weatherForecast = (state, {type, payload}) => {
    switch (type) {
        case FORECAST_LOADING:
            return {
                ...state,
                loading: true,
                location: 'jakarta',
            };
        case FORECAST_SUCCESS:
            return {
                ...state,
                loading: false,
                data: payload,
                location: 'jakarta',
            };
        case FORECAST_FAILED:
            return {
                ...state,
                loading: false,
                error: payload,
                data: {}
            }
        default:
            return state;
    }
}

export default weatherForecast