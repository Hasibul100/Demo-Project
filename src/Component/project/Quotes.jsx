import React, { useEffect, useState, useRef } from "react";
import html2canvas from "html2canvas";
import axios from "axios";

function Quotes() {
  const [num, setNum] = useState(0);
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(false);
  const [author, setAuthor] = useState("");
  const quoteRef = useRef(null);
  const generateImage = () => {
    html2canvas(quoteRef.current).then((canvas) => {
      canvas.toBlob((blob) => {
        const file = new File([blob], "quote.png", { type: "image/png" });

        if (navigator.share) {
          const link = document.createElement("a");
          console.log(link)
          link.href = URL.createObjectURL(file);
          link.download = "quote.png";
          link.click();
        }
      });
    });
  };
  // API থেকে উক্তি আনবে
  const fetchQuote = async () => {
    setLoading(true);
    setNum(num + 1);
    try {
      const response = await axios.get(
        "/api/api/1.0/?method=getQuote&lang=en&format=json"
      );
      const data = response.data;
      console.log(data); // ZenQuotes ডেটা array আকারে ফেরত দেয়
      setQuote(data.quoteText); // `q` = quote
      setAuthor(data.quoteAuthor); // `a` = author
      setLoading(false);
    } catch (error) {
      console.error("Error fetching quote:", error.message);
    }
  };

  // পেজ লোড হওয়ার সঙ্গে সঙ্গেই একটি উক্তি দেখাবে
  useEffect(() => {
    fetchQuote();
  }, []);
  const handleShare = () => {
    const shareText = `"${quote}" - ${author}`;
    if (navigator.share) {
      navigator
        .share({
          title: "Inspiring Quote",
          text: shareText,
          url: window.location.href,
        })
        .catch((error) => console.error("Error sharing:", error));
    } else {
      alert("Your browser does not support sharing!");
    }
  };
  console.log(navigator);

  return (
    <div className="static flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-6">
      <p
        className={
          loading
            ? "absolute p-3 rounded-lg bg-slate-200 text-blue-400 border-2"
            : ""
        }
      >
        {loading && "Loading..."}
      </p>

      <div
      
        className={
          loading
            ? "bg-slate-500  text-black p-6 rounded-lg shadow-lg max-w-lg w-full"
            : "bg-white text-black p-6 rounded-lg shadow-lg max-w-lg w-full"
        }
      >
        <div   ref={quoteRef} className="p-5 w-40">
          <h1 className="text-2xl font-bold mb-4">📜 Random Quote Generator</h1>
          <p className="text-lg italic mb-2">"{quote}"</p>
          <p className="text-right font-bold text-blue-500">— {author}</p>
        </div>
        <button
          onClick={fetchQuote}
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          Next Quote
        </button>
        <button
          onClick={handleShare}
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
        >
          Share
        </button>
        <button
          onClick={generateImage}
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
        >
          Share
        </button>
      </div>
    </div>
  );
}
export default Quotes;
