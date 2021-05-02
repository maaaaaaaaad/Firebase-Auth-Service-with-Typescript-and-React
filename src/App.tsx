import React from "react";
import ".App.css";
import AuthServiceImpl from "./components/service/authService";
import styles from "./App.module.css";

interface AuthService {
  authService: AuthServiceImpl;
}

const App: React.FC<AuthService> = ({ authService }) => {
  return <section className={styles.section}></section>;
};

export default App;
