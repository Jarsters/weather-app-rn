import { TODAY_FAILED, TODAY_LOADING, TODAY_SUCCESS } from "../../constants/weatherActions";
import axiosInstance from "../../helpers/axiosInstance";

export default () => (dispatch) => {
    dispatch({
      type: TODAY_LOADING,
    });
    axiosInstance
      .get('current.json?key=ccbbfb606dba48bbb02111217210111&q=Jakarta&aqi=yes')
      .then((res) => {
        dispatch({
          type: TODAY_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: TODAY_FAILED,
          payload: err.response
            ? err.response.data
            : {error: 'Something went wrong, try again'},
        });
      });
  };