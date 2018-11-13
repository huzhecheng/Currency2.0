import {
  SUBMIT_VALUE,
} from "../actions/currencyAction";

const initialStates = {
  twd: 100,
  forex: 100,
  status: true
};


const submitValue = (state = initialStates, action) => {
  switch (action.type) {
    case SUBMIT_VALUE:
      return {
        ...state,
        twd: action.payload.twd,
        forex: action.payload.forex,
        status: action.payload.status
      };
    default:
      return state;
  }
};

export default submitValue;
