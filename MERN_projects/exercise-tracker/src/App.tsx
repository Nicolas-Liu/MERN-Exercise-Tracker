import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ExerciseList from "./components/ExerciseList";
import Navbar from "./components/Navbar";
import LoggedExercise from "./components/LoggedExercise";

function App() {
  return (
    <>
      <Navbar />
      {/* <Route path="./riyte" element={<ExerciseList />} /> */}
      {/* <ExerciseList /> */}
      <LoggedExercise />
    </>
  );
}

export default App;
