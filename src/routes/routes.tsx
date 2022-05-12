import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Post from "../pages/post";

export const routes = (
  <>
    <Routes>
      <Route path={"/"} element={<Home />}></Route>
      <Route path={"/post/:postId"} element={<Post />}></Route>
    </Routes>
  </>
);
