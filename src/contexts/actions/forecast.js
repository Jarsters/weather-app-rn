import { FORECAST_FAILED, FORECAST_LOADING, FORECAST_SUCCESS } from "../../constants/weatherActions";
import axiosInstance from "../../helpers/axiosInstance";

export default () => (dispatch) => {
    dispatch({
      type: FORECAST_LOADING,
    });
    axiosInstance
      .get('forecast.json?key=ccbbfb606dba48bbb02111217210111&q=Jakarta&days=3&aqi=yes&alerts=yes')
      .then((res) => {
        console.log('=================res data==================')
        console.log(res.data)
        console.log('-----------------res data------------------')
        dispatch({
          type: FORECAST_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: FORECAST_FAILED,
          payload: err.response
            ? err.response.data
            : {error: 'Something went wrong, try again'},
        });
      });
  };