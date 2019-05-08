import {
  PLANETS,
  PLANETS_SUCCESS,
  PLANETS_FAIL,
} from '../actions/types';

const INITIAL_STATE = {
  data: [],
  message: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    //Plannets 
    case PLANETS:
      return { ...state, loading: true, message: 'Planet list loading' };
    case PLANETS_SUCCESS:
      return { ...state, ...INITIAL_STATE, data: action.payload };
    case PLANETS_FAIL:
      return { ...state, message: 'Plannet list data could not fatch!', loading: false };

    default:
      return state;
  }
};
