import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const [showNumber, setShowNumber] = useState(false);
  const whatsappNumber = "+919876543210";

  return (
    <div className="fixed bottom-5 right-5 flex flex-col items-center">
      {/* WhatsApp Icon */}
      <button
        // onMouseEnter={() => setShowNumber(true)}
        onMouseLeave={() => setShowNumber(false)}
        className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
        onClick={() =>
          window.open(
            `https://wa.me/${whatsappNumber.replace("+", "")}`,
            "_blank"
          )
        }
      >
        <FaWhatsapp size={28} />
      </button>

      {showNumber && (
        <div className="mt-2 px-3 py-1 bg-white text-black text-sm rounded-md shadow-lg">
          {whatsappNumber}
        </div>
      )}
    </div>
  );
};

export default WhatsAppButton;
