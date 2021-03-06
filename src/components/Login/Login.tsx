import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import AuthServiceImpl from "../service/authService";
import postCSS from "./Login.module.css";

interface LoginService {
  authService: AuthServiceImpl;
}

type LoginContent = {
  title: string;
  gooleBtnName: string;
  githubBtnName: string;
};

const Login: React.FC<LoginService> = ({ authService }) => {
  const [onState, setOnState] = useState(false);
  const history = useHistory();

  useEffect(() => {
    authService.userState((user: any) => {
      user && goToLobby(user.uid);
    });
  });

  const userLoginTextContent: LoginContent = {
    title: "Login",
    gooleBtnName: "Google",
    githubBtnName: "Github",
  };

  const loginBtnHandler: React.MouseEventHandler<HTMLButtonElement> = (
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {
    setOnState(true);
    authService
      .login(event.currentTarget.textContent! as string)
      .then((userDB) => {
        const userId = userDB.user.uid;
        setOnState(false);
        goToLobby(userId);
      });
  };

  const goToLobby = (userId: string): void => {
    history.push({
      pathname: "/lobby",
      state: { id: userId },
    });
  };

  return (
    <>
      {!onState && (
        <div className={postCSS.Login}>
          <div className={postCSS.title}>{userLoginTextContent.title}</div>
          <section className={postCSS.btns}>
            <button onClick={loginBtnHandler} className={postCSS.googleBtn}>
              <span className={postCSS.googleFont}>
                {userLoginTextContent.gooleBtnName}
              </span>
            </button>
            <button onClick={loginBtnHandler} className={postCSS.githubBtn}>
              <span className={postCSS.githubFont}>
                {userLoginTextContent.githubBtnName}
              </span>
            </button>
          </section>
        </div>
      )}
      {onState && <div className={postCSS.lodingSpanner}></div>}
    </>
  );
};

export default Login;
