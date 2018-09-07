import axios from "axios";

const CLIENT_API_ENDPOINT =
  "https://enbx9hfr33.execute-api.us-east-2.amazonaws.com/dev/users";
const axiosConfig = {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  crossDomain: true
};

export const get = async () => {
  const result = await axios.get(CLIENT_API_ENDPOINT, axiosConfig);
  return result.data;
};

export const put = async user => {
  const payload = JSON.stringify(user);
  const result = await axios.put(CLIENT_API_ENDPOINT, payload, axiosConfig);
  return result.data;
};

export const post = async user => {
  // const payload = JSON.stringify(user);
  const result = await axios.post(CLIENT_API_ENDPOINT, user, axiosConfig);
  return result.data;
};

export const getInitialState = () => {
  return get().then(result => {
    console.dir(result);
    return { users: result };
  });
};
