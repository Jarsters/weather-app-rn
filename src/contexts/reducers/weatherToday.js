import { TODAY_FAILED, TODAY_LOADING, TODAY_SUCCESS } from "../../constants/weatherActions";

const weather = (state, {type, payload}) => {
    switch (type) {
        case TODAY_LOADING:
            return {
                ...state,
                loading: true,
                location: 'jakarta',
            };
        case TODAY_SUCCESS:
            return {
                ...state,
                loading: false,
                data: payload,
                location: 'jakarta',
            };
        case TODAY_FAILED:
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

export default weather