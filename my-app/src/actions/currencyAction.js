/* fetchData */
export const FETCH_CURRENCY_BEGIN = "FETCH_CURRENCY_BEGIN";
export const FETCH_CURRENCY_SUCCESS = "FETCH_CURRENCY_SUCCESS";
export const FETCH_CURRENCY_FAILURE = "FETCH_CURRENCY_FAILURE";
export const fetchCurrencyBegin = () => ({
  type: FETCH_CURRENCY_BEGIN
});

export const fetchCurrencySuccess = currencys => ({
  type: FETCH_CURRENCY_SUCCESS,
  payload: { currencys }
});

export const fetchCurrencyError = error => ({
  type: FETCH_CURRENCY_FAILURE,
  payload: { error }
});

export const fetchCurrency = dispatch => {
  dispatch(fetchCurrencyBegin());
  fetch("https://fred-express-api.herokuapp.com/api/currency")
    .then(handleErrors)
    .then(res => res.json())
    .then(json => {
      dispatch(fetchCurrencySuccess(json));
    })
    .catch(error => dispatch(fetchCurrencyError(error)));
};

const handleErrors = response => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};

/* submitValue */
export const SUBMIT_VALUE = "SUBMIT_VALUE";
export const submitValue = ({ twd, forex, status }) => ({
  type: SUBMIT_VALUE,
  payload: { twd, forex, status }
});
