import React from "react";
import Input from "../../../Components/Forms/Input/Input";
import Button from "../../../Components/Forms/Button/Button";
import useForm from "../../../Hooks/useForm/useForm";
import useFetch from "../../../Hooks/useFetch/useFetch";
import { PASSWORD_LOST } from "../../../api";
import Error from "../../../Components/Elementos de interface/Error/Error";

const LoginPasswordLost = () =>{

  const{data, loading, error, request} = useFetch();

  const login = useForm();

  async function handleSubmit(event){
    if(login.validate){
    event.preventDefault();
    const { url, options} = PASSWORD_LOST({login: login.value, url: window.location.href.replace('perdeu', 'resetar')});
    const {json} = await request(url, options)
    console.log(json);
    }
  }

  return(
  <section className="animeLeft">
    <h1 className="title">Perdeu a senha?</h1>
    {
    data ? <p style={{color:'#4c1'}}>{data}</p> : 
      <form onSubmit={handleSubmit}>
      <Input label="Email / Usuario" type="text" name="login" {...login}/>
      {loading ? <Button disabled>Enviando...</Button> : <Button>Enviar</Button>}
    </form>
    }

    <Error error={error}/>
  </section>
  ); 
}

export default LoginPasswordLost;