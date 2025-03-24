import React from "react";
import quranData from "@/assets/quran.json";
import { useNavigate } from "react-router-dom";

function QuranList() {
  console.log(quranData.quran[0]);
  const navigate= useNavigate()
  return (
    <div  className="p-4">
      <h1 className="text-3xl text-center sticky top-0 bg-slate-200 shadow-sm rounded-lg  p-2 font-bold mb-6">All Quran</h1>
      {quranData.quran.map((data, index) => {
        return (
          <div onClick={()=>{
            navigate(`${data.id}`)
        }}
            key={index}
            className="mb-4 p-4 border rounded-lg shadow-md flex bg-white items-center"
          >
            {/* ID with rounded background */}
            <p className="text-3xl inline-block rounded-full p-4 mr-4">
              {data.id}
            </p>

            {/* Content section */}
            <div className="flex-grow">
              <h2 className="text-xl font-semibold text-gray-800">
                Name: {data.name}
              </h2>
              <h3 className="text-lg text-gray-700">{data.transliteration}</h3>
              <p className="text-md text-gray-600">Ayat: {data.total_verses}</p>
            </div>

            {/* Type aligned to the right */}
            <p className="text-md text-gray-600 ml-auto">{data.type}</p>
          </div>
        );
      })}
    </div>
  );
}

export default QuranList;
