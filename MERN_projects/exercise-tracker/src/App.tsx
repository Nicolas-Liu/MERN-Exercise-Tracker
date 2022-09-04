import { Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Exercise from "./components/Exercise";
import Navbar from "./components/Navbar";
import LoggedExercise from "./components/LoggedExercise";
import CreateUser from "./components/CreateUser";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise" element={<Exercise />} />
        <Route path="/log" element={<LoggedExercise />} />
        <Route path="/createUser" element={<CreateUser />} />
      </Routes>
    </>
  );
}

export default App;
