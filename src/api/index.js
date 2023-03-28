// implement your own methods in here, if your data is coming from A rest API
import axios from 'axios';
export const authLocal = "https://api.paysol.co.ke/authentication/";
let tokenStr = 'MTVlNmJkNDE1NWZiNDBiZTZlZTVmNjMwZDg5ZmNkMTU1NTRiOTM2MDBlY2U2ZmI2YjUwNGE4MWRmOWJjYTFkZA==';
export const execute = (params, url) => {
  return axios.post(url, params,{ headers: {"Authorization" : `Bearer ${tokenStr}`}});
};
