import {
  LOGIN_START,
  LOGIN_SUCCESS,
  // TODO write out failure
  // LOGIN_FAILURE,
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE
} from '../actions';

const initialState = {
  error: '',
  fetchingData: false,
  loggingIn: false,
  someData: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        error: '',
        loggingIn: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        error: ''
      };
    case FETCH_DATA_START:
      return {
        ...state,
        error: '',
        fetchingData: true
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        fetchingData: false,
        someData: action.payload
        // .filter(add any filters here)
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        error: action.payload,
        fetchingData: false
      };
    case SIGNUP_START:
      return {
        ...state,
        error: '',
        signingUp: true
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        signingUp: false,
        error: ''
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        signingUp: false,
        error: action.payload
      }
    default:
      return state;
  }
}

export default reducer;