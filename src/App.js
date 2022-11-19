import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled, { css } from "styled-components";
import EmptyPate from "./component/page/EmptyPage";
import LoginPage from "./component/page/LoginPage";
import MainPage from "./component/page/MainPage";
import PostViewPage from "./component/page/PostViewPage";
import PostWritePage from "./component/page/PostWritePage";
import "./style/style.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="main" element={<MainPage l />} />
        <Route path="post-write" element={<PostWritePage />} />
        <Route path="post/:postId" element={<PostViewPage />} />
        <Route path="*" element={<EmptyPate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
