import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { setAuthToken } from "./api/adminApi";
import Header from "./components/Header";
import Footer from "./components/Footer"; 
import Home from "./components/Home";
import EMICalculator from "./components/EmiCalculator";
import About from "./components/About";
import AdminLogin from "./components/admin/Login";
import AdminDashboard from "./components/admin/Dashboard";
import LoanForm from "./components/loans/LoanForm";
import WhatsAppButton from "./components/WhatsappButton";

const AppLayout = ({ children }) => {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith("/admin");

  useEffect(() => {
    document.documentElement.style.overflowX = "hidden";
    document.body.style.overflowX = "hidden";
  }, []);

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      {!isAdminPage && <Header />}
      <div className="max-w-screen-xl w-full mx-auto p-4 sm:p-6 flex-grow">
        {children}
        {!isAdminPage && <WhatsAppButton />}
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
      {!isAdminPage && <Footer />} {/* Add Footer here for all non-admin pages */}
    </div>
  );
};

const App = () => {
  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (token) {
      setAuthToken(token);
    }
  }, []);

  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/emi-calculator" element={<EMICalculator />} />
          <Route path="/about" element={<About />} />
          <Route path="/loans/:loanType" element={<LoanForm />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
      </AppLayout>
    </Router>
  );
};

export default App;