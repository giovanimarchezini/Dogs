import { func } from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import Input from "../../../Components/Forms/Input/Input";
import Button from "../../../Components/Forms/Button/Button";
import useForm from "../../../Hooks/useForm/useForm";
import Error from "../../../Components/Elementos de interface/Error/Error";
import styles from "./LoginForm.module.css";
import styleBtn from "../../../Components/Forms/Button/Button.module.css"
import { UserContext } from "../../../UserContext";





const LoginForm = () =>{
  const username = useForm();
  const password = useForm();

  const {userLogin, error, loading} = React.useContext(UserContext); 

  async function handleSubmit(event){
    event.preventDefault();
   if(username.validate() && password.validate()){
     userLogin(username.value, password.value); 
  }
}
    
  return (
  <section className="animeLeft">
    <h1 className="title">Login</h1>
    <form action="" onSubmit={handleSubmit} className={styles.form}>
      <Input
        label="Usuario"
        type="text"
        name="username"
        {...username}
      />
      <Input
        label="Senha"
        type="password"
        name="password"
        {...password}
      />
      {loading ? <Button disabled>Carregando...</Button>: <Button>Entrar</Button>}
      <Error error={error}/>
      {error && <p>{error}</p>}
    </form>
    <Link to="/login/perdeu" className={styles.perdeu}>Perdeu a senha?</Link>
    <div className={styles.cadastro}>
      <h2 className={styles.subtitle}>Cadastre-se</h2>
      <p>Ainda não possui conta? cadastre-se no site.</p>
      <Link to="/login/criar" className={styleBtn.button}>Cadastro</Link>
    </div>
  
  </section>
  )
}

export default LoginForm;