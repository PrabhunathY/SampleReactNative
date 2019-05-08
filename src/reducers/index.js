import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';
import PlanetsReducer from './PlanetsReducer';
import PlanetDetailsReducer from './PlanetDetailsReducer';

export default combineReducers({
  login: LoginReducer,
  planets: PlanetsReducer,
  planetDetails: PlanetDetailsReducer,
});
