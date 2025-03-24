import React from "react";
import { useParams } from "react-router-dom";
import quranData from "@/assets/quran.json";

function Surah() {
  const { id } = useParams();
  const data = quranData.quran.find((data) => id == data.id);
  const bismillah= "بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ"

  return (
    <div className="m-2 p-2 text-center bg-neutral-500 rounded-lg">
      <div className="bg-neutral-400 rounded-lg  p-1">
        <h1>{data.name}</h1>
      </div>
      
        <p  className=" bg-neutral-400 m-1">{data.transliteration !=="At-Tawbah" && bismillah}</p>
    
      <div className="mt-1  bg-neutral-300 shadow-lg rounded-lg  p-2">
        {data.verses.map((data) => (
          <span className="text-2xl ">
            {data.text} {data.id}{" "}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Surah;
