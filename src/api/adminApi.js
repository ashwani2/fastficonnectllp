import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api",
});

// Function to set the token in Axios headers
export const setAuthToken = (token) => {
  if (token) {
    axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    localStorage.setItem("adminToken", token); // Store token persistently
  } else {
    delete axiosInstance.defaults.headers.common["Authorization"];
    localStorage.removeItem("adminToken");
  }
};

// Check for token on page load and set it
const token = localStorage.getItem("adminToken");
if (token) {
  setAuthToken(token);
}

export const adminLogin = async (credentials) => {
  try {
    const response = await axiosInstance.post("/users/login", credentials);
    const { token } = response.data;
    setAuthToken(token); // Set token globally
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

export default axiosInstance;
