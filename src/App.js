import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import EmptyPate from "./component/page/EmptyPage";
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
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="post-write" element={<PostWritePage />} />
        <Route path="post/:postId" element={<PostViewPage />} />
        <Route path="*" element={<EmptyPate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
