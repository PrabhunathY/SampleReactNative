import {
    PLANETS,
    PLANETS_SUCCESS,
    PLANETS_FAIL
  } from './types';
  import { PLANETS_URL } from '../net/ApiConst';
  import { CallAPI } from '../net/ApiUtils';
  
  /**
   * API call to search planets
   */
  export const searchPlanets = (searchText) => (dispatch) => {
    dispatch({ type: PLANETS });
    const appUrl = `${PLANETS_URL}?search=${searchText}`;
    const config = {
      url: appUrl,
      method: 'GET',
    };
    const request = CallAPI(config, respnse => onPlanetSuccess(dispatch, respnse), error => onPlanetError(dispatch, error));
  };
  
  /**
   * API request success callback function
   */
  const onPlanetSuccess = (dispatch, response) => {
    if (response && response.data && (response.status === 200 || response.status === 201)) {
      dispatch({
        type: PLANETS_SUCCESS,
        payload: response.data.results || []
      });
    }
  }
  
  /**
   * API request error callback function
   */
  const onPlanetError = (dispatch, error) => {
    dispatch({ type: PLANETS_FAIL });
    console.log('onError: ', error);
  }
  