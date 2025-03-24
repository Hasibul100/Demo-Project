import React from "react";
import TodoList from "./project/TodoList";
import Profile from "./project/Profile";
import Counter from "./project/CounterApp";
import UserCard from "./project/UserCard";
import Test from "./project/TestPage";

function Project() {
  const clnm =
    "bg-neutral-200 border-2 border-gray-300 rounded-2xl p-4 text-center transition-all duration-300 hover:scale-105 hover:shadow-md cursor-pointer";
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xlg:grid-cols-4 gap-4 m-2">
      <a href="project/quran/">
        <div className={clnm}>
          <h1 className="text-lg">The holy Al Quran </h1>
          <p>Read the holy Al Quran Surah by Surah </p>
        </div>
      </a>
      <a
        href="project/jokes"
        className="bg-neutral-200 border-2 border-gray-300 rounded-2xl p-4 text-center transition-all duration-300 hover:scale-105 hover:shadow-md cursor-pointer"
      >
        <h1 className="text-lg font-bold text-gray-800">Jokes</h1>
        <p className="text-gray-600">Get a random joke</p>
      </a>

      <a
        href="project/form"
        className="bg-neutral-200 border-2 border-gray-300 rounded-2xl p-4 text-center transition-all duration-300 hover:scale-105 hover:shadow-md cursor-pointer"
      >
        <h1 className="text-lg font-bold text-gray-800">Register Form</h1>
        <p className="text-gray-600">Create or Register user</p>
      </a>

      <a href="project/counter/">
        <div className={clnm}>
          <h1 className="text-lg">Counter App</h1>
          <p>Use this counter for counting</p>
        </div>
      </a>
      <a href="project/weather/">
        <div className={clnm}>
          <h1 className="text-lg">Weather App</h1>
          <p>Use this counter for counting</p>
        </div>
      </a>
      <a href="project/profile/">
        <div className={clnm}>
          <h1 className="text-lg">Profile Card</h1>
          <p>Explore my created user card</p>
        </div>
      </a>
      <a href="project/usercard/">
        <div className={clnm}>
          <h1 className="text-lg">User Card</h1>
          <p>Explore my created user card</p>
        </div>
      </a>
      <a href="project/todo/">
        <div className={clnm}>
          <h1 className="text-lg">Todo List </h1>
          <p>Explore my created todo list component</p>
        </div>
      </a>
      <a href="project/quote/">
        <div className={clnm}>
          <h1 className="text-lg">Qoutes </h1>
          <p>Explore my created Quote component</p>
        </div>
      </a>
      <a href="project/nid/">
        <div className={clnm}>
          <h1 className="text-lg">Genarate NID </h1>
          <p>Explore my created NID component</p>
        </div>
      </a>
    </div>
  );
}

export default Project;
