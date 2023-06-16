import React from "react";
import styles from "./Login.modules.css";
import {Routes, Route } from "react-router-dom";
import LoginForm from "./LoginForm/LoginForm";
import LoginCreate from "./LoginCreate/LoginCreate";
import LoginPasswordLost from "./LoginPasswordLost/LoginPasswordLost";
import LoginPasswordReset from "./LoginPasswordReset/LoginPasswordReset";

const Login = ()=>{
  return(
    <div className={styles.login}>
     <Routes>
      <Route path="/" element={<LoginForm/>}/>
      <Route path="criar" element={<LoginCreate/>}/>
      <Route path="perdeu" element={<LoginPasswordLost/>}/>
      <Route path="resetar" element={<LoginPasswordReset/>}/>
     </Routes>
    </div>
    );
}
export default Login;