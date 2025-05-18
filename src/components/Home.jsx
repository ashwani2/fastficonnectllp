import React, { useRef } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const loanSectionRef = useRef(null);
  const learningSectionRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Welcome to FastFi Connect LLP
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mb-8">
            Instant financial solutions powered by cutting-edge fintech. FastFi
            combines speed ("Fast") with finance ("Fi") to deliver seamless,
            technology-driven services.
          </p>
          <button
            onClick={() => scrollToSection(loanSectionRef)}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition shadow-md"
          >
            Get Started
          </button>
        </div>
      </div>

      {/* Loan Products Section */}
      <div ref={loanSectionRef} className="py-16 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">
              Bringing you the <span className="text-blue-600">Best Products</span>{" "}
              from Top Banks & Financial Institutions
            </h2>
            <div className="border-b-4 border-blue-600 w-24 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              {
                name: "Credit Card",
                icon: "💳",
                color: "bg-blue-100",
                path: "/loans/credit-card",
              },
              {
                name: "Business Loan",
                icon: "📂",
                color: "bg-blue-100",
                path: "/loans/business-loan",
              },
              {
                name: "Home Loan",
                icon: "🏡",
                color: "bg-blue-100",
                path: "/loans/home-loan",
              },
              {
                name: "Gold Loan",
                icon: "🪙",
                color: "bg-blue-100",
                path: "/loans/gold-loan",
              },
              {
                name: "Digital Personal Loan",
                icon: "📱",
                color: "bg-blue-100",
                path: "/loans/digital-personal-loan",
              },
            ].map((item, index) => (
              <Link key={index} to={item.path}>
                <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer h-full">
                  <div className={`p-5 rounded-full ${item.color} text-4xl mb-4`}>
                    {item.icon}
                  </div>
                  <p className="text-lg font-semibold text-gray-800 text-center">
                    {item.name}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Check Credit Section */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              On The Basis of your <span className="text-blue-600">Credit Score</span>
            </h3>
            <p className="text-gray-600 text-lg">
              Understand your current financial position and how to improve it.
            </p>
          </div>
          <div className="bg-blue-50 p-8 rounded-xl shadow-md text-center">
            <p className="text-5xl font-bold text-blue-600 mb-2">729</p>
            <p className="text-gray-700 text-xl">Your credit score is Good</p>
          </div>
        </div>
      </div>

      {/* Great Loan Offers */}
      <div className="py-16 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Get great loan <span className="text-blue-600">offers</span>
            </h3>
            <p className="text-gray-600 text-lg">
              We review your qualifications to find you the best rates from over
              50+ lenders.
            </p>
          </div>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-lg font-medium">Save on your LIC Housing Finance Ltd</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-lg font-medium">Get a Gold Loan without EMI*</p>
            </div>
          </div>
        </div>
      </div>

      {/* Identify Ways to Save */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Identify ways to <span className="text-blue-600">save</span>
            </h3>
            <p className="text-gray-600 text-lg">
              Analyze your spending habits and discover potential savings
              opportunities.
            </p>
          </div>
          <div className="bg-blue-50 p-8 rounded-xl shadow-md text-center">
            <p className="text-4xl font-bold text-blue-600 mb-2">₹6,31,336</p>
            <p className="text-gray-700 text-xl">Potential Savings</p>
          </div>
        </div>
      </div>

      {/* 3Cs of Learning Section */}
      <section className="bg-blue-600 py-16 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Reclaim control over your personal finance
            </h2>
            <p className="text-xl max-w-3xl mx-auto">
              Our <span className="font-bold">3Cs of Learning</span> help you make better financial decisions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white text-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-blue-600">Check</h3>
              <p className="text-gray-600 mb-6">
                Understand your credit report analysis
              </p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                Get Started
              </button>
            </div>

            {/* Card 2 */}
            <div className="bg-white text-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-blue-600">Choose</h3>
              <p className="text-gray-600 mb-6">
                Get personalized loan recommendations
              </p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                Browse Loans
              </button>
            </div>

            {/* Card 3 */}
            <div className="bg-white text-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-blue-600">Comprehend</h3>
              <p className="text-gray-600 mb-6">
                We make complex financial topics simple
              </p>
              <button
                onClick={() => scrollToSection(learningSectionRef)}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Learning Center
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Center Section */}
      <div ref={learningSectionRef} className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Learning Center</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding money and managing your personal finances is difficult. 
              We solve this with expert financial guidance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "The Ultimate Guide to Credit Score",
                tag: "Credit Score",
                img: "/images/credit-score.png",
                source: "https://blog.nationwide.com/family-life/on-your-own/understanding-your-credit-score-infographic/",
              },
              {
                title: "6 Top Tips to Increase Home Loan Eligibility",
                tag: "Home Loan",
                img: "/images/10693057.jpg",
                source: "https://bethkobliner.com/advice_basics/infographic-credit-score-history",
              },
              {
                title: "What Is 70/30 Rule In Investing And Managing Money?",
                tag: "Money Management",
                img: "/images/2598572.jpg",
                source: "https://www.equifax.com/personal/education/credit/score/articles/-/learn/what-affects-credit-score-infographic",
              },
            ].map((item, index) => (
              <a
                key={index}
                href={item.source}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
              >
                <div className="h-48 bg-blue-50 flex items-center justify-center">
                  <img
                    src={item.img}
                    alt={item.tag}
                    className="h-full object-contain"
                  />
                </div>
                <div className="p-6">
                  <span className="text-blue-600 font-semibold">
                    {item.tag}
                  </span>
                  <h4 className="text-lg font-bold mt-2 mb-4 text-gray-800">{item.title}</h4>
                  <div className="text-blue-600 font-medium">Read More →</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Find answers to common questions about our services
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "How do I get the cheapest home loan?",
                answer: "Securing the cheapest home loan involves strategic preparation and smart choices. First, build a strong credit history early to ensure you qualify for the best interest rates. Next, always compare offers from multiple banks and NBFCs rather than settling for the first one. Tailor your home loan to fit your specific profile – including your property type, income, and credit score – for better customized deals. Process your loan application efficiently to avoid delays, rejections, and additional costs. Most importantly, regularly monitor market interest rates and refinance when better opportunities arise. We offer a comprehensive package that helps you navigate all these steps, ensuring you save the most money throughout the lifetime of your loan."
              },
              {
                question: "What documents do I need for a home loan?",
                answer: "Generally, you'll need to provide identity proof (like Aadhaar card, PAN card, passport), address proof, income proof (salary slips, IT returns, bank statements), property documents, and recent passport-sized photographs. Requirements may vary slightly depending on your employment type (salaried or self-employed) and the lender's policies. We will guide you through the exact checklist for your specific case to ensure a smooth approval process."
              },
              {
                question: "How does my credit score impact my finances?",
                answer: "Your credit score is a direct reflection of your financial reliability. A high score can unlock lower interest rates, higher loan approvals, better credit card offers, and overall stronger financial credibility. Conversely, a low score can make borrowing expensive or even inaccessible. Maintaining a good credit score means more opportunities and significant savings over time."
              },
              {
                question: "How is my credit score calculated?",
                answer: "Your credit score is calculated based on factors like your payment history (timely repayment of EMIs and bills), credit utilization (how much of your credit limit you use), length of your credit history, types of credit you hold (secured and unsecured loans), and the number of recent loan or credit inquiries you've made. Consistent, responsible credit behavior helps build a healthy credit score."
              },
              {
                question: "How long does it take to get a personal loan?",
                answer: "In many cases, personal loans are approved and disbursed within 24 to 72 hours after submission of all required documents. Some lenders even offer instant loans to customers with pre-approved credit limits. However, if any documentation or eligibility issue arises, the process may take slightly longer. We help you choose the right lender to ensure the fastest possible disbursal."
              },
              {
                question: "Do loan applications impact my credit score?",
                answer: "Yes, each time you apply for a loan, the lender performs a hard inquiry on your credit report. Multiple loan applications in a short period can slightly lower your credit score, signaling riskier behavior to lenders. It's best to be selective and apply only after carefully comparing and pre-checking your eligibility. We assist you in finding the best match with minimal impact on your credit score."
              }
            ].map((faq, index) => (
              <details key={index} className="group bg-white p-6 rounded-xl shadow-md">
                <summary className="flex justify-between items-center cursor-pointer">
                  <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                  <span className="ml-4 text-blue-600 text-2xl group-open:hidden">+</span>
                  <span className="ml-4 text-blue-600 text-2xl hidden group-open:inline">−</span>
                </summary>
                <p className="mt-4 text-gray-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;