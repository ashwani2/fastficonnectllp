import React, { useState } from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState(9500000);
  const [interestRate, setInterestRate] = useState(14.5);
  const [loanTenure, setLoanTenure] = useState(1);
  const [tenureType, setTenureType] = useState('Yr');

  const handleTenureTypeChange = (type) => {
    setTenureType(type);
    if (type === 'Yr') {
      setLoanTenure(1); // Reset to 1 year when switching to years
    } else {
      setLoanTenure(1); // Reset to 1 month when switching to months
    }
  };

  const calculateEMI = () => {
    const principal = loanAmount;
    const monthlyRate = interestRate / 12 / 100;
    const months = tenureType === 'Yr' ? loanTenure * 12 : loanTenure;
    
    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / 
                (Math.pow(1 + monthlyRate, months) - 1);
    
    return Math.round(emi);
  };

  const emi = calculateEMI();
  const totalMonths = tenureType === 'Yr' ? loanTenure * 12 : loanTenure;
  const totalPayment = emi * totalMonths;
  const totalInterest = totalPayment - loanAmount;

  // Calculate percentages
  const principalPercentage = ((loanAmount / totalPayment) * 100).toFixed(1);
  const interestPercentage = ((totalInterest / totalPayment) * 100).toFixed(1);

  const pieData = [
    { name: "Principal Loan Amount", value: loanAmount, percentage: principalPercentage },
    { name: "Total Interest", value: totalInterest, percentage: interestPercentage }
  ];
  const COLORS = ['#4CAF50', '#FF9800'];

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(value).replace('₹', '₹ ');
  };

  // Get marks for tenure slider based on type
  const getTenureMarks = () => {
    if (tenureType === 'Yr') {
      return ['1', '10', '15', '20', '25', '30'];
    } else {
      return ['1', '60', '120', '180', '240', '300', '360'];
    }
  };

  const tenureMarks = getTenureMarks();

  return (
    // Previous code remains the same until the Loan Tenure section
    <div className="max-w-4xl mx-auto p-4 sm:p-8">
      {/* Previous code for header and first two sliders remains the same */}
      <div className="text-center mb-6 sm:mb-8">
        <h1 className="text-xl sm:text-2xl font-bold mb-2">EMI Calculator</h1>
        <p className="text-xs sm:text-sm text-gray-600">Calculate your Loan EMI & Total Interest Due</p>
      </div>

      <div className="bg-gray-50 rounded-lg shadow-lg p-4 sm:p-6">
        {/* Loan Amount Slider */}
        <div className="mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center mb-2 gap-2">
            <label className="text-sm font-medium">Loan Amount</label>
            <div className="flex items-center ml-auto">
              <input 
                type="text"
                value={loanAmount.toLocaleString()}
                onChange={(e) => setLoanAmount(Number(e.target.value.replace(/,/g, '')))}
                className="w-24 sm:w-32 px-2 py-1 text-right border rounded text-sm"
              />
              <span className="ml-2">₹</span>
            </div>
          </div>
          <div className="relative">
            <input
              type="range"
              min="0"
              max="20000000"
              step="100000"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-[10px] sm:text-xs text-gray-500 mt-1">
              <span>0</span>
              <span>25L</span>
              <span>50L</span>
              <span>75L</span>
              <span>100L</span>
              <span>125L</span>
              <span>150L</span>
              <span>175L</span>
              <span>200L</span>
            </div>
          </div>
        </div>

        {/* Interest Rate Slider */}
        <div className="mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center mb-2 gap-2">
            <label className="text-sm font-medium">Interest Rate</label>
            <div className="flex items-center ml-auto">
              <input 
                type="text"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-24 sm:w-32 px-2 py-1 text-right border rounded text-sm"
              />
              <span className="ml-2">%</span>
            </div>
          </div>
          <div className="relative">
            <input
              type="range"
              min="5"
              max="20"
              step="0.1"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-[10px] sm:text-xs text-gray-500 mt-1">
              <span>5</span>
              <span>7.5</span>
              <span>10</span>
              <span>12.5</span>
              <span>15</span>
              <span>17.5</span>
              <span>20</span>
            </div>
          </div>
        </div>

        {/* Loan Tenure Slider */}
        <div className="mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center mb-2 gap-2">
            <label className="text-sm font-medium">Loan Tenure</label>
            <div className="flex items-center ml-auto">
              <input 
                type="text"
                value={loanTenure}
                onChange={(e) => setLoanTenure(Number(e.target.value))}
                className="w-24 sm:w-32 px-2 py-1 text-right border rounded text-sm"
              />
              <div className="ml-2 flex">
                <button
                  onClick={() => handleTenureTypeChange('Yr')}
                  className={`px-2 py-1 text-sm rounded-l ${
                    tenureType === 'Yr' ? 'bg-blue-500 text-white' : 'bg-gray-200'
                  }`}
                >
                  Yr
                </button>
                <button
                  onClick={() => handleTenureTypeChange('Mo')}
                  className={`px-2 py-1 text-sm rounded-r ${
                    tenureType === 'Mo' ? 'bg-blue-500 text-white' : 'bg-gray-200'
                  }`}
                >
                  Mo
                </button>
              </div>
            </div>
          </div>
          <div className="relative">
            <input
              type="range"
              min="1"
              max={tenureType === 'Yr' ? "30" : "360"}
              step="1"
              value={loanTenure}
              onChange={(e) => setLoanTenure(Number(e.target.value))}
              className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-[10px] sm:text-xs text-gray-500 mt-1">
              {tenureMarks.map((mark) => (
                <span key={mark}>{mark}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow">
            <div className="text-center mb-4 sm:mb-6">
              <h3 className="text-base sm:text-lg font-semibold mb-2">Loan EMI</h3>
              <p className="text-xl sm:text-2xl font-bold">₹ {formatCurrency(emi)}</p>
            </div>
            
            <div className="text-center mb-4 sm:mb-6">
              <h3 className="text-base sm:text-lg font-semibold mb-2">Total Interest Payable</h3>
              <p className="text-xl sm:text-2xl font-bold">₹ {formatCurrency(totalInterest)}</p>
            </div>
            
            <div className="text-center">
              <h3 className="text-base sm:text-lg font-semibold mb-2">Total Payment</h3>
              <p className="text-xs sm:text-sm text-gray-500">(Principal + Interest)</p>
              <p className="text-xl sm:text-2xl font-bold">₹ {formatCurrency(totalPayment)}</p>
            </div>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-lg shadow">
            <h3 className="text-base sm:text-lg font-semibold mb-4 text-center">Break-up of Total Payment</h3>
            <div className="w-full">
              <div className="flex justify-center">
                <PieChart width={250} height={200}>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={0}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={0}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </div>
              <div className="flex flex-col gap-2 text-sm mt-2">
                <div className="flex items-center justify-center">
                  <div className="w-3 h-3 bg-[#4CAF50] mr-2"></div>
                  <span>Principal Loan Amount ({principalPercentage}%)</span>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-3 h-3 bg-[#FF9800] mr-2"></div>
                  <span>Total Interest ({interestPercentage}%)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EMICalculator;