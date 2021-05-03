import React from "react";
import postCSS from "./Viewer.module.css";

interface Props {
  item: string;
  deleteItem(itemNode: Node, delNode: Node): void;
}

const Viewer: React.FC<Props> = ({ item, deleteItem }) => {
  const onDelete: React.MouseEventHandler<HTMLButtonElement> = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    const itemList = event.currentTarget.parentNode!.parentNode;
    const delNode = event.currentTarget.parentNode;
    console.log(itemList);
    deleteItem(itemList!, delNode!);
  };

  return (
    <section className={postCSS.section}>
      <li className={postCSS.user}>
        <button onClick={onDelete} className={postCSS.delBtn}>
          <span className={postCSS.btnTextContent}>Delete</span>
        </button>
        <span className={postCSS.title}>{item}</span>
      </li>
    </section>
  );
};

export default Viewer;
