import axios from "axios";

// const URL = `http://localhost:8000`;
const URL = `https://calm-blue-bull-tutu.cyclic.app`;


const token = localStorage.getItem("flipKartToken")

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

export const payUsingPaytmAPI = async (data) => {
  try {
    let response = await axios.post(`${URL}/payment`, data);
    return response.data;
  } catch (err) {
    console.log("Error while using paytm api at service folder", err.message);
  }
};
