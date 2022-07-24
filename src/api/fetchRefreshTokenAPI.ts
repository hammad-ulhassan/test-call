import { REFRESH_TOKEN_ENDPOINT } from "./endpoints";
import axios from 'axios'

const baseURL = process.env.API_BASE_URL;

const fetchRefreshTokenAPI = async (access_token: string | null) => {
  if (!access_token) {
    return;
  }
  let response = await axios.post(`${baseURL}${REFRESH_TOKEN_ENDPOINT}`, {
    refresh: access_token
  });
  return response;
};

/**
 * await axios.post(`${baseURL}${}`, {
            refresh: authTokens.refresh
          });
 */

export default fetchRefreshTokenAPI;
