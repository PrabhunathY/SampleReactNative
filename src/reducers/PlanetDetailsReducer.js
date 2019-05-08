import {
  PLANET_DETAILS,
  PLANET_DETAILS_SUCCESS,
  PLANETS_FAIL,
  PLANET_DETAILS_FAIL,
} from '../actions/types';

const INITIAL_STATE = {
  data: {},
  message: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    //Plannets 
    case PLANET_DETAILS:
      return { ...state, loading: true, message: 'Planet details loading' };
    case PLANET_DETAILS_SUCCESS:
      return { ...state, ...INITIAL_STATE, data: action.payload };
    case PLANET_DETAILS_FAIL:
      return { ...state, message: 'Plannet details data could not fatch!', loading: false };

    default:
      return state;
  }
};
