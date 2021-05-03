import React, { useRef } from "react";
import postCSS from "./CreateForm.module.css";

interface Props {
  userInputViewer(userInput: UserFormData): void;
}

type InputTemplate = {
  name: string;
  emailAddress: string;
  message: string;
  submit: string;
};

export type UserFormData = {
  name: string;
  email: string;
  message: string;
};

const CreateForm: React.FC<Props> = ({ userInputViewer }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const inputContent: InputTemplate = {
    name: "Please you enter name",
    emailAddress: "Please you enter email address",
    message: "Please you enter message",
    submit: "SIGN IN",
  };

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const userName = nameRef.current!.value;
    const userEmail = emailRef.current!.value;
    const userMessage = messageRef.current!.value;

    const userForm: UserFormData = {
      name: userName,
      email: userEmail,
      message: userMessage,
    };

    userForm && userInputViewer(userForm);
  };

  return (
    <section className={postCSS.section}>
      <form onSubmit={onSubmit} ref={formRef}>
        <input ref={nameRef} type="text" placeholder={inputContent.name} />
        <input
          ref={emailRef}
          type="text"
          placeholder={inputContent.emailAddress}
        />
        <input
          ref={messageRef}
          type="text"
          placeholder={inputContent.message}
        />
        <input type="submit" value={inputContent.submit} />
      </form>
    </section>
  );
};

export default CreateForm;
