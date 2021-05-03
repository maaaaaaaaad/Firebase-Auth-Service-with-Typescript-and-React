import React from "react";
import { UserFormData } from "../CreateForm/CreateForm";
import postCSS from "./Viewer.module.css";

interface Props {
  saveData: UserFormData | undefined;
}

const Viewer: React.FC<Props> = ({ saveData }) => {
  return (
    <section className={postCSS.section}>
      <div className={postCSS.userName}>{saveData!.name}</div>
      <div className={postCSS.userEmail}>{saveData!.email}</div>
      <div className={postCSS.userMessage}>{saveData!.message}</div>
    </section>
  );
};

export default Viewer;
