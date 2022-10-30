import React from "react";
import { Link } from "react-router-dom";

export default function EmptyPate() {
  return (
    <>
      <p>존재하지 않는 페이지입니다.</p>
      <Link to="/">메인 페이지로</Link>
    </>
  );
}
