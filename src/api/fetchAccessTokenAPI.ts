import { ACCESS_TOKEN_ENDPOINT } from "./endpoints";

const fetchAccessTokenAPI = async (
  username: string = "hammad",
  password: string = "hammad123"
) => {
  let response = await fetch(`${process.env.API_BASE_URL}${ACCESS_TOKEN_ENDPOINT}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });
  let data = await response.json();
  return data;
};

export default fetchAccessTokenAPI;
