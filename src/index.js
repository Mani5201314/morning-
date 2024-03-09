import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Api from "./Ass2";
import Api2 from "./api";
import Apifun from "./apifun";
import Pixabay from "./pixabay";
import Data from "./Data";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Add from "./Add";

let root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    {/* <App /> */}

    {/* <Api /> */}
    {/* <Apifun /> */}
    {/* <Api2 /> */}
    {/* <Data /> */}
    <BrowserRouter>
      <Routes>
        <Route element={<Pixabay />} path="/" />

        <Route element={<Data />} path="/j" />
        <Route element={<Add />} path="/add" />
      </Routes>
    </BrowserRouter>
  </>
);
