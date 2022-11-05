import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Clock from "./component/page/Clock";
import EmptyPate from "./component/page/EmptyPage";
import LoginPage from "./component/page/LoginPage";
import MainPage from "./component/page/MainPage";
import PostViewPage from "./component/page/PostViewPage";
import PostWritePage from "./component/page/PostWritePage";

const MainTitleText = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: centder;
`;

function App() {
  return (
    <BrowserRouter>
      <MainTitleText>제로의 미니 블로그</MainTitleText>
      <Clock />
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="main" element={<MainPage />} />
        <Route path="post-write" element={<PostWritePage />} />
        <Route path="post/:postId" element={<PostViewPage />} />
        <Route path="*" element={<EmptyPate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
