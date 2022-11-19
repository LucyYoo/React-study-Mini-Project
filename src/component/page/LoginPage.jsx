import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getItem, removeItem, setItem } from "../Ui/storage";
import HeaderPage from "./HeaderPage";
import MainPage from "./MainPage";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #ffcdd2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InputText = styled.span`
  border-bottom: solid 3px #ce93d8;
  margin-right: 10px;
`;

const ButtonStyle = styled.span`
  border: solid 3px #ce93d8;
  background-color: white;
  border-radius: 5px;
`;

export default function LoginPage() {
  const [login, setLoign] = useState(false);
  const [userName, setUserName] = useState("");
  useEffect(() => {
    const user = getItem("user");
    setUserName(user);
    if (user) setLoign(true);
  }, [login]);

  function onLogin(e) {
    const user = getItem("user");
    e.preventDefault();
    if (!user) {
      setItem("user", userName);
    }
    setLoign(true);
  }

  function onLogOut(e) {
    e.preventDefault();
    removeItem("user");
    setLoign(false);
  }

  return (
    <>
      {login ? (
        <>
          <HeaderPage username={userName} onLogOut={onLogOut} />
          <MainPage />
        </>
      ) : (
        <Wrapper>
          <div>
            <h2>이름을 입력해주세요</h2>
            <form onSubmit={onLogin}>
              <InputText>
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                ></input>
              </InputText>
              <ButtonStyle>
                <button>입장</button>
              </ButtonStyle>
            </form>
          </div>
        </Wrapper>
      )}
    </>
  );
}
