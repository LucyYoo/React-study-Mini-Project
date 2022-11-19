import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getItem, removeItem, setItem } from "../Ui/storage";
import HeaderPage from "./HeaderPage";
import MainPage from "./MainPage";

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
        <div>
          <h3>이름을 입력해주세요</h3>
          <form onSubmit={onLogin}>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            ></input>
            <button>입장</button>
          </form>
        </div>
      )}
    </>
  );
}
