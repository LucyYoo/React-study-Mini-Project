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
    if (user) setLoign(true);
  }, [login]);
  console.log(login);
  function onLogin(e) {
    /**
     * loginName을 getItem을 해온다.
     * getItem의 값이 있다면
     * login을 트루로 바꾼다.
     * getItem 값이 없다면
     * userName을 setItem 하고 login을 트루로 바꾼다.
     */

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
  /**메인페이지한테 userName을 줘서 메인페이지에서 이름이 뜨도록 한다.
   * 메인페이지를 route index로 해서 무조건 로그인 페이지로 가도록 한다.
   * App.js의 이름부분 메인페이지로 옮기기
   */
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
