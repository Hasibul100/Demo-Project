import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="max-w-sm mx-auto p-6 bg-white shadow-md rounded-md text-center">
      <h2 className="text-2xl font-bold">Counter: {count}</h2>
      <div className="flex justify-center gap-4 mt-4">
        <button
          className="px-4 py-2 bg-green-600 text-white rounded-md"
          onClick={() => setCount(count + 1)}
        >
          ➕ Increment
        </button>
        <button
          className="px-4 py-2 bg-red-600 text-white rounded-md"
          onClick={() => setCount(count - 1)}
        >
          ➖ Decrement
        </button>
      </div>
      <button
        className="mt-4 px-4 py-2 bg-gray-600 text-white rounded-md"
        onClick={() => setCount(0)}
      >
        🔄 Reset
      </button>
    </div>
  );
}

export default Counter;
