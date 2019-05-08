import {
  PEOPLE,
  PEOPLE_SUCCESS,
  PEOPLE_FAIL,
  LOGIN_USER,
} from '../actions/types';
import { PEOPLE_API_ERROR, LOADING } from '../value/strings';

const INITIAL_STATE = {
  people: [],
  message: '',
  loading: false,
  loginUser: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    //People 
    case PEOPLE:
      return { ...state, loading: true, message: LOADING };
    case PEOPLE_SUCCESS:
      return { ...state, ...INITIAL_STATE, people: action.payload };
    case PEOPLE_FAIL:
      return { ...state, ...INITIAL_STATE, message: PEOPLE_API_ERROR };

    //Login user information
    case LOGIN_USER:
      return { ...state, loginUser: action.payload };

    default:
      return state;
  }
};
