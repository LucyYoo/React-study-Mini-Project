import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import EmptyPate from "./component/page/EmptyPage";
import HeaderPage from "./component/page/HeaderPage";
import LoginPage from "./component/page/LoginPage";
import MainPage from "./component/page/MainPage";
import PostViewPage from "./component/page/PostViewPage";
import PostWritePage from "./component/page/PostWritePage";

function App() {
  return (
    <BrowserRouter>
      <HeaderPage />
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
