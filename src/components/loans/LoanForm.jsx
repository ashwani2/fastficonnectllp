import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { submitLoanQuery } from "../../api/loanApi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoanForm = () => {
  const { loanType } = useParams(); // Get loan type from the URL

  // Convert "home-loan" to "Home Loan"
  const formattedLoanType = loanType
    .split("-") // Split by "-"
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter of each word
    .join(" "); // Join back with spaces
  
  console.log(loanType, formattedLoanType);
  

  const [formData, setFormData] = useState({
    fullname: "",
    pincode: "",
    phoneNumber: "",
    emailAddress: "",
    loanAmount: "",
    loanType: formattedLoanType, // Set dynamically
  });

  useEffect(() => {
    setFormData((prev) => ({ ...prev, loanType: formattedLoanType }));
  }, [loanType]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitLoanQuery(formData);
      toast.success(`${formattedLoanType} form submitted successfully!`);
      setFormData({
        fullname: "",
        pincode: "",
        phoneNumber: "",
        emailAddress: "",
        loanAmount: "",
        loanType: formattedLoanType,
      });
    } catch (error) {
      toast.error(error.message || "Failed to submit form");
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Apply for {formattedLoanType}</h2>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">Full Name:</label>
        <input
          type="text"
          name="fullname"
          value={formData.fullname}
          onChange={handleChange}
          className="w-full border p-2 mb-4"
          required
        />

        <label className="block mb-2">Pincode:</label>
        <input
          type="text"
          name="pincode"
          value={formData.pincode}
          onChange={handleChange}
          className="w-full border p-2 mb-4"
          required
        />

        <label className="block mb-2">Phone:</label>
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          className="w-full border p-2 mb-4"
          required
        />

        <label className="block mb-2">Email:</label>
        <input
          type="email"
          name="emailAddress"
          value={formData.emailAddress}
          onChange={handleChange}
          className="w-full border p-2 mb-4"
          required
        />

        <label className="block mb-2">Loan Amount:</label>
        <input
          type="number"
          name="loanAmount"
          value={formData.loanAmount}
          onChange={handleChange}
          className="w-full border p-2 mb-4"
          required
        />

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Apply Now
        </button>
      </form>
    </div>
  );
};

export default LoanForm;
