import axios from "axios";

const URL = `http://localhost:8000`;

export const authenticateSignup = async (payload) => {
  try {
    return await axios.post(`${URL}/signup`, payload);
  } catch (error) {
    console.log("Error while signup api calling at service", error);
  }
};

export const authenticateLogin = async (payload) => {
  try {
    return await axios.post(`${URL}/login`, payload);
  } catch (error) {
    console.log("Error while login api calling at service", error);
    return error.response;
  }
};
