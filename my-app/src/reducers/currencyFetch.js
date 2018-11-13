import {
  FETCH_CURRENCY_BEGIN,
  FETCH_CURRENCY_SUCCESS,
  FETCH_CURRENCY_FAILURE
} from "../actions/currencyAction";

const initialStates = {
  items: [],
  loading: true,
  error: null
};

const currencyFetch = (state = initialStates, action) => {
  switch (action.type) {
    case FETCH_CURRENCY_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_CURRENCY_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.currencys
      };
    case FETCH_CURRENCY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      };
    default:
      return state;
  }
};

export default currencyFetch;
