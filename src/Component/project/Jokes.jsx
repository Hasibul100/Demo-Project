import axios from "axios";
import React, { useEffect, useState } from "react";

function Jokes() {
  const [favJokes, setFavJokes] = useState([]);
  const [jokes, setJokes] = useState("");
  const jokesUrl = "https://sv443.net/jokeapi/v2/joke/Programming?type=single";
  const genarateJoke = async () => {
    const Joke = await axios
      .get(jokesUrl)
      .then((res) => res.data)
      .catch((err) => err.message);

    console.log(Joke);
    setJokes(Joke);
  };
  useEffect(() => {
     console.log(favJokes);
  }, [favJokes]);

  const favfun = () => {
    if (jokes) {
      setFavJokes((prev) => [...prev, jokes]);
     
    }
  };

  return (
    <div className="">
      {
        <div className="flex-col m-2 p-2 rounded-md shadow-lg items-center justify-center  bg-slate-400">
          <h1 className="text-lg text-lime-300 text-center m-2.5">
            {jokes.category}{" "}
          </h1>
          <p className="m-10 mr-10">{jokes.joke}</p>
          <div className="flex items-center justify-center">
            <button
              onClick={genarateJoke}
              className="p-2 m-2 flex mx-auto text-center rounded-lg bg-green-200"
            >
              Get a new joke
            </button>
            <button
              onClick={favfun}
              className="p-2 m-2 flex mx-auto text-center rounded-lg bg-green-400"
            >
              Favourite
            </button>
          </div>
        </div>
      }
    </div>
  );
}

export default Jokes;
