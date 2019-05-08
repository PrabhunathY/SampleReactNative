import axios from 'axios';

export const CallAPI = (requireConfig = {}, onSuccess, onError) => {
  const config = {
    ...requireConfig,
    url: encodeURI(requireConfig.url),
    timeout: 5000,
  };
  const request= axios(config)
  .then(response => onSuccess(response))
  .catch(error => onError(error));
  return request;
};