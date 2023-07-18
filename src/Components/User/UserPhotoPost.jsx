import React from 'react'
import styles from './UserPhotoPost.module.css';
import Input from '../../Components/Forms/Input/Input'
import Button from '../Forms/Button/Button';
import useForm from '../../Hooks/useForm/useForm';
import useFetch from '../../Hooks/useFetch/useFetch';
import Error from '../Elementos de interface/Error/Error';
import { PHOTO_POST } from '../../api';
import { useNavigate } from 'react-router-dom';


const UserPhotoPost = () => {
  const nome = useForm();
  const peso = useForm('number');
  const idade = useForm('number');
  const [img, setImg] = React.useState({

  });
  const {data, loading, error, request} = useFetch();
  const navigate = useNavigate();

 React.useEffect(() =>{
     if(data) navigate('/conta'); 
 },[data, navigate]);

  function handleImgChange({target}){
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }

  function handleSubmit(event){
    event.preventDefault();
    const formData = new FormData();
    formData.append('img', img.raw);
    formData.append('nome', nome.value);
    formData.append('peso', peso.value);
    formData.append('idade', idade.value);
    const token = window.localStorage.getItem('token');
    const {url, options} = PHOTO_POST(formData, token);
    request(url, options);

  }
  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="nome" {...nome}/>
        <Input label="Peso" type="number" min="0" name="peso" {...peso}/>
        <Input label="Idade" type="number" min="0" name="idade" {...idade}/>
        <input className={styles.file} type="file" name="img" id="img" onChange={handleImgChange}/>
        {loading ? <Button disabled>Enviando</Button> : <Button>Enviar</Button>}
        <Error error={error}/>
      </form>
      <div>
        {img && <div className={styles.preview} style={{backgroundImage: `url('${img.preview}')`}}></div>}
      </div>
    </section>
  )
}

export default UserPhotoPost;
