import React from "react";
import ProfileImg from "@/assets/img.jpg";

function UserCard() {
  return (
    <div className="m-2 space-y-4  min-w-sm  p-2 items-justify rounded-2xl bg-slate-100 ">
      <div>
        <img className="rounded-full m-auto" src={ProfileImg}></img>
        <div className=" text-center">
          <p>Lesile Walton</p>
          <p>@Lesile</p>
          <p>Product Disigner Kylv</p>
        </div>
        <div>
          <div className="flex text-center items-center justify-center">
            <div className="p-2">
              <p>17</p>
              <p>Shots</p>
            </div>
            <div className="p-2">
              <p>2343</p>
              <p>Following</p>
            </div>
            <div className="p-2">
              <p>13547</p>
              <p>Folloers</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <button>Send Message</button>

            <a href=" fjf">MORE...</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
