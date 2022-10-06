import axios from "axios";

const URL = `http://localhost:8000`;

export const authenticateSignup = async (payload) => {
  try {
    return await axios.post(`${URL}/signup`, payload);
  } catch (error) {
    console.log("Error while signp api calling", error);
  }
};
