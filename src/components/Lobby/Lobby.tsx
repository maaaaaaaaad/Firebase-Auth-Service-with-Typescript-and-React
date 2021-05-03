import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router";
import CreateForm, { UserFormData } from "../CreateForm/CreateForm";
import AuthServiceImpl from "../service/authService";
import Viewer from "../Viewer/Viewer";
import postCSS from "./Lobby.module.css";

interface AuthService {
  authService: AuthServiceImpl;
}

interface Indexable {
  [key: string]: string;
}

type LobbyContent = {
  title: string;
  btnTextContent: string;
};

type FormBtn = {
  openTitle: string;
  closeTitle: string;
};

const Lobby: React.FC<AuthService> = ({ authService }) => {
  const [userInputCheck, setUserInputCheck] = useState<boolean>(false);
  const [saveData, setSaveData] = useState<Indexable>();
  const [formState, setFormState] = useState<boolean>(false);
  const history = useHistory();

  const LobbyTextContent: LobbyContent = {
    title: "Lobby",
    btnTextContent: "logout",
  };

  const formBtnStyle: FormBtn = {
    openTitle: "Create form",
    closeTitle: "Close form",
  };

  useEffect(() => {
    authService.userState((user: any) => {
      if (!user) {
        history.push("/");
      } else {
        return;
      }
    });
  }, [authService, history]);

  const onLogout = useCallback(() => {
    authService.logout();
  }, [authService]);

  const formClick: React.MouseEventHandler<HTMLButtonElement> = (
    event?: React.MouseEvent<HTMLButtonElement>
  ) => {
    setFormState(true);
  };

  const formCloseBtn: React.MouseEventHandler<HTMLButtonElement> = (
    event?: React.MouseEvent<HTMLButtonElement>
  ) => {
    setFormState(false);
  };

  const userInputViewer = (userInputData: UserFormData) => {
    console.log(userInputData);
    setSaveData(userInputData);
    setUserInputCheck(true);
  };

  const deleteItem = (itemNode: Node, delNode: Node): void => {
    itemNode.removeChild(delNode);
  };

  return (
    <section className={postCSS.LobbySection}>
      <span className={postCSS.title}>{LobbyTextContent.title}</span>
      <button className={postCSS.logoutBtn} onClick={onLogout}>
        <span className={postCSS.logoutBtn__textContent}>
          {LobbyTextContent.btnTextContent}
        </span>
      </button>

      <section className={postCSS.inputSection}>
        {!formState && (
          <button onClick={formClick} className={postCSS.formBtn}>
            <span className={postCSS.formBtnTitle}>
              {formBtnStyle.openTitle}
            </span>
          </button>
        )}
        {formState && (
          <>
            <div className={postCSS.createFormSection}>
              <button onClick={formCloseBtn}>{formBtnStyle.closeTitle}</button>
              <CreateForm userInputViewer={userInputViewer}></CreateForm>
            </div>

            {userInputCheck && (
              <ul className={postCSS.viewerSection}>
                {Object.keys(saveData! as Indexable).map((key) => (
                  <Viewer
                    key={key}
                    item={saveData![key]}
                    deleteItem={deleteItem}
                  ></Viewer>
                ))}
              </ul>
            )}
          </>
        )}
      </section>
    </section>
  );
};

export default Lobby;
