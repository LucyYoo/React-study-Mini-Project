import React from "react";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getItem, removeItem } from "../Ui/storage";
import Clock from "./Clock";
import Button from "../Ui/Button";
/**
 * 타이틀
 * 시계
 * 로그아웃
 * 글 작성하기
 */

const MainTitleText = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: centder;
`;

export default function HeaderPage({ username, onLogOut }) {
  const navigate = useNavigate();

  return (
    <>
      {username ? (
        <>
          <MainTitleText>{username}의 블로그</MainTitleText>
          <Button
            title="글 작성하기"
            onClick={() => {
              navigate("/post-write");
            }}
          />
          <Button title="로그아웃" onClick={onLogOut} />
        </>
      ) : (
        <MainTitleText>로그인 해주세요.</MainTitleText>
      )}
      <Clock />
    </>
  );
}
