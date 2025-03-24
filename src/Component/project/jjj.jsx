import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import html2canvas from "html2canvas";

const Quote = () => {
  const quoteRef = useRef(null);
  const generateImage = () => {
    html2canvas(quoteRef.current).then((canvas) => {
      canvas.toBlob((blob) => {
        const file = new File([blob], "quote.png", { type: "image/png" });

        if (navigator.share) {
          navigator
            .share({
              files: [file],
              title: "Inspiring Quote",
              text: "Here’s an inspiring quote for you!",
            })
            .catch((error) => console.error("Error sharing:", error));
        } else {
          const link = document.createElement("a");
          link.href = URL.createObjectURL(file);
          link.download = "quote.png";
          link.click();
        }
      });
    });
  };

  return (
    <div>
      <div
        ref={quoteRef}
        className="p-5 bg-blue-600 text-white rounded-md w-80 text-center"
      >
        <p className="text-lg italic">
          "Success is not final, failure is not fatal: It is the courage to
          continue that counts."
        </p>
        <p className="mt-2">- Winston Churchill</p>
      </div>

      <button
        onClick={generateImage}
        className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md"
      >
       Share or  Download as Image
      </button>
    </div>
  );
};

export default Quote;
