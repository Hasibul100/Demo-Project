import React from "react";

function Error() {
  return (
    <div className="items-center justify-center flex-col flex mx-auto m-3">
      <h1 className="text-2xl ">404 </h1>
      <a href="/">
      <h1 className="bg-red-700 rounded-lg p-3 shadow-lg">This Page isn't available now</h1>
      </a>
    </div>
  );
}

export default Error;
