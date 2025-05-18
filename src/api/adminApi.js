import axios from "axios";
import axiosInstance from "./axiosInstance";


// Function to set the token in Axios headers
export const setAuthToken = (token) => {
  if (token) {
    axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    localStorage.setItem("adminToken", token);
  } else {
    delete axiosInstance.defaults.headers.common["Authorization"];
    localStorage.removeItem("adminToken");
  }
};

// Initialize auth token if exists
const token = localStorage.getItem("adminToken");
if (token) {
  setAuthToken(token);
}


export const adminLogin = async (credentials) => {
  try {
    const response = await axiosInstance.post("/users/login", credentials);
    const { token } = response.data;
    setAuthToken(token);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

export default axiosInstance;