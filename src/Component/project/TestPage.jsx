import React from "react";

function TestPage() {
  const inputClass =
    "block w-full border-2  p-2 border-gray-400 rounded-md shadow-sm";
  return (
    <div className=" w-full max-w-3xl mx-auto">
      <form action="/#" method="post">
        <div className="m-4 p-4 bg-slate-200 rounded-lg">
          <h1 className="text-lg text-green-600 m-2 text-center">
            Form in React
          </h1>
          <label className="block mb-1" htmlFor="fname">
            First Name:{" "}
          </label>
          <input
            className={inputClass}
            type="text"
            required
            placeholder="Enter First Name"
          />
          <label className="block mb-1" htmlFor="lname">
            Last Name
          </label>
          <input
            className={inputClass}
            type="text"
            required
            placeholder="Enter Last Name"
          />
          <label className="block mb-1" htmlFor="email">
            Email
          </label>
          <input
            className={inputClass}
            type="email"
            required
            placeholder="Enter Email"
          />
          <label htmlFor="email">Contact Number</label>
          <input
            className={`${inputClass} `}
            // pattern="[0-9]{11}"
            required autoComplete="tel"
            type="tel"
            placeholder="Enter Mobile Number"
          />
          <label className="block mb-1">Gender</label>
          <div className="flex items-center gap-4 justify-center">
            <label className="flex items-center gap-2">
              <input type="radio" name="gender" value="male" /> Male
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="gender" value="female" /> Female
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="gender" value="others" /> Others
            </label>
          </div>

          <label className="block mb-1">Your best choice</label>
          <div className="items-center flex gap-3 justify-center">
            <input
              className="flex items-center gap-2"
              type="checkbox"
              name="subject"
              value="English"
            />
            Male
            <input
              className="flex items-center gap-2"
              type="checkbox"
              name="subject"
              value="Math"
            />
            Female
            <input
              className="flex items-center gap-2"
              type="checkbox"
              name="subject"
              value="Physics"
            />
            Others
          </div>

          <label className="block mb-1">Upload resume</label>
          <input className={inputClass} type="file" />

          <label className="block mb-1">Enter URL</label>
          <input className={inputClass} type="url" />
          <label className="block mb-1">Select your choice</label>
          <select className={inputClass} name="" id="">
            <option value="smartphone ">smart phone </option>
            <option value="iphone "> iphone </option>
            <option value="laptop ">laptop </option>
            <option value="desktop ">desktop </option>
          </select>
          <label className="block mb-1">About</label>
          <textarea className={`${inputClass} h-24`} name="" id=""></textarea>
          <label className="block mb-1">Submit Or Reset</label>
          <div className="text-center items-center">
            <button
              className="m-2 transition duration-300 ease-in-out bg-green-200 p-5 pt-2 pb-2 border-2 hover:bg-green-500 hover:text-white border-green-500 rounded-lg border-s-8 shadow-md "
              type="submit"
            >
              Submit
            </button>
            <button
              className="transition duration-300 ease-in-out m-2 bg-green-200 p-5 pt-2 pb-2 border-2  hover:text-white hover:bg-red-500 border-red-500 rounded-lg border-s-8 shadow-md "
              type="reset"
            >
              Reset
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default TestPage;
