import axios from "axios";

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
// Add a request interceptor to include the token
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
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

export default axiosInstance;
