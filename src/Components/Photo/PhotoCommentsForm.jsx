import React from 'react'
import {ReactComponent as Enviar}  from '../../Assets/enviar.svg';
import useFetch from '../../Hooks/useFetch/useFetch';
import { COMMENT_POST } from '../../api';
import Error from '../Elementos de interface/Error/Error';
import styles from './PhotoCommentsForm.module.css';

const PhotoCommentsForm = ({id, setComments}) => {
  
  const {request, error} = useFetch();
  const [comment, setComment] = React.useState('')

  async function handleSubmit(event){
    event.preventDefault();
    const {url, options} = COMMENT_POST(id, {comment});
    const {response, json} = await request (url, options);
    if(response.ok){
      setComment('');
      setComments((comments) => [...comments, json]);
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <textarea 
      className={styles.textarea}
      id='comment' 
      name='comment' 
      value={comment} 
      onChange={({target}) => setComment(target.value)}
      placeholder='Faça um comentário...'
      />
      <button className={styles.button}>
        <Enviar/>
      </button>
      <Error error={error}/>
    </form>
  )
}

export default PhotoCommentsForm;
