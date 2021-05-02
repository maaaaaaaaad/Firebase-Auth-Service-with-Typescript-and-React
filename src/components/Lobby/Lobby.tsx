import React, { useCallback, useEffect } from "react";
import { useHistory } from "react-router";
import AuthServiceImpl from "../service/authService";
import postCSS from "./Lobby.module.css";

interface AuthService {
  authService: AuthServiceImpl;
}

type LobbyContent = {
  title: string;
  btnTextContent: string;
};

const Lobby: React.FC<AuthService> = ({ authService }) => {
  const history = useHistory();

  useEffect(() => {
    authService.userState((user: any) => {
      if (!user) {
        history.push("/");
      } else {
        return;
      }
    });
  }, [authService, history]);

  const LobbyTextContent: LobbyContent = {
    title: "Lobby",
    btnTextContent: "logout",
  };

  const onLogout = useCallback(() => {
    authService.logout();
  }, [authService]);

  return (
    <div className={postCSS.Lobby}>
      <span className={postCSS.title}>{LobbyTextContent.title}</span>
      <button className={postCSS.logoutBtn} onClick={onLogout}>
        <span className={postCSS.logoutBtn__textContent}>
          {LobbyTextContent.btnTextContent}
        </span>
      </button>
    </div>
  );
};

export default Lobby;
