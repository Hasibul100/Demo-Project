import React from "react";
import ProfileImg from "@/assets/img.jpg";

function Profile() {
  return (
    <div className="flex items-center justify-center m-auto p-10">
      <div className="max-w-sm   bg-slate-500 rounded-2xl shadow-lg p-6 text-center">
        <img
          src={ProfileImg}
          alt="Profile"
          className="w-24 h-24 rounded-full mx-auto"
        />
        <h2 className="text-xl font-bold mt-4">John Doe</h2>
        <p className="text-gray-500">Frontend Developer</p>

        <a href="https://www.facebook.com/md.tarikul.islam.569139">
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Follow me
          </button>
        </a>
      </div>
    </div>
  );
}

export default Profile;
