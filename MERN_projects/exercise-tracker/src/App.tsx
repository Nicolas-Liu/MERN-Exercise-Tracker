import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ExerciseList from "./components/ExerciseList";
import Navbar from "./components/Navbar";
import LoggedExercise from "./components/LoggedExercise";
import CreateUser from "./components/CreateUser";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ExerciseList />} />
        <Route path="/log" element={<LoggedExercise />} />
        <Route path="/createUser" element={<CreateUser />} />
      </Routes>
    </>
  );
}

export default App;
