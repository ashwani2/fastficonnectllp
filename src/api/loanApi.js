import axiosInstance from "./axiosInstance";

// Submit a new loan query
export const submitLoanQuery = async (loanData) => {
  try {
    const response = await axiosInstance.post("/loans", loanData);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Fetch loan queries with pagination, filters, and authentication
export const fetchLoanQueries = async (page = 1, limit = 10, from = "", to = "", loanType = "") => {
  try {
    const token = localStorage.getItem("adminToken");
    const headers = token ? { Authorization: `${token}` } : {};

    // Construct query parameters
    const params = new URLSearchParams({ page, limit });
    if (from) params.append("from", from);
    if (to) params.append("to", to);
    if (loanType) params.append("loanType", loanType);

    const response = await axiosInstance.get(`/loans?${params.toString()}`, { headers });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Download loan data as an Excel file with authentication and filters
export const downloadExcel = async (from = "", to = "", loanType = "") => {
  try {
    const token = localStorage.getItem("adminToken");
    const headers = token ? { Authorization: `${token}` } : {};

    // Construct query parameters
    const params = new URLSearchParams();
    if (from) params.append("from", from);
    if (to) params.append("to", to);
    if (loanType) params.append("loanType", loanType);

    const response = await axiosInstance.get(`/loans/export?${params.toString()}`, {
      headers,
      responseType: "blob", // Ensures correct file download
    });

    // Create and trigger file download
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "loan_queries.xlsx");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error("Error downloading Excel file:", error);
  }
};
