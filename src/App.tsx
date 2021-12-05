import React from "react"
import { Routes, Route, Link } from "react-router-dom"

import './App.css';
import NavBar from './common/navBar/NavBar'
import Home from "./components/Home/Home";
import Grid from "./components/Layout/Grid";

function App() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="grid" element={<Grid />}></Route>
      {/* <Route path="*" element={<NotFound />}></Route> */}
    </Routes>
    </>
  );
}

export default App;
