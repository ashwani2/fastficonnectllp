import axios from "axios";

// Environment-based base URL configuration
const getBaseURL = () => {
  if (process.env.NODE_ENV === "production") {
    return "https://loan-backend-pufc.onrender.com/api"; // Production API
  }
  return "http://localhost:5000/api"; // Development API
};

const axiosInstance = axios.create({
  baseURL: getBaseURL(),
  headers: {
    "Content-Type": "application/json",
  },
});

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

// Request interceptor for adding auth token
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("adminToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access (token expired)
      setAuthToken(null);
      window.location.href = "/login"; // Redirect to login
    }
    return Promise.reject(
      error.response?.data || { message: "An error occurred" }
    );
  }
);

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