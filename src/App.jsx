import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Project from "./Component/Project";
import Header from "./layout/Header";
import Jokes from "./Component/project/Jokes";
import QuranList from "./Component/quran/QuranList";
import Layout from "./Component/Layout";
import Surah from "./Component/quran/Surah";
import Counter from "./Component/project/CounterApp";
import TodoList from "./Component/project/TodoList";
import TestPage from "./Component/project/TestPage";
import Profile from "./Component/project/Profile";
import UserCard from "./Component/project/UserCard";
import Error from "./Component/Error";
import Quotes from "./Component/project/Quotes";
import Screenshort from "./Component/project/screenshort";
import Weather from "./Component/project/Weather";

function App() {
  const location = useLocation();
  const routename = [
    "/project/quran",
    "/project/quran/",
    "/project/quran/:id",
    "/project/quran/:id/",
  ];
  console.log();
  return (
    <>
      {!routename.some((route) =>
        new RegExp(`^${route.replace(":id", "\\d+")}$`).test(location.pathname)
      ) && <Header />}
      {/* <QuranList /> */}
      <Routes>
        <Route path="/" element={<Header />} />
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="project" element={<Project />} />
        <Route path="contact" element={<Contact />} />
        <Route path="project/jokes" element={<Jokes />} />
        <Route path="project/counter" element={<Counter />} />
        <Route path="project/todo" element={<TodoList />} />
        <Route path="project/profile" element={<Profile />} />
        <Route path="project/usercard" element={<UserCard />} />
        <Route path="project/form" element={<TestPage />} />
        <Route path="project/quote" element={<Quotes />} />
        <Route path="project/quran" element={<QuranList />} />
        <Route path="project/weather" element={<Weather />} />
        <Route path="project/nid" element={ <Screenshort />} />
        <Route path="project/quran/:id" element={<Surah />} />
        <Route path="*" element={<Error />} />
       
      </Routes>
    </>
  );
}

export default App;
