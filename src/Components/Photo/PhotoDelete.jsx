import React from 'react'
import styles from './PhotoDelete.module.css';
import { PHOTO_DELETE } from '../../api';
import useFetch from '../../Hooks/useFetch/useFetch';
import {ReactComponent as Lixeira}  from '../../Assets/delete.svg';

const PhotoDelete = ({id}) => {
    const {loading, request} = useFetch();
    async function handleClick(){
      const confirm = window.confirm('Tem Certeza que deseja deletar?');
      if(confirm){
        const {url, options} = PHOTO_DELETE(id);
        const {response} = await request(url, options);
        if(response.ok) window.location.reload();
      }
      
    }


  return (
    <>
      {
      loading ? <button className={styles.delete} disabled> <Lixeira/> </button> :
      <button className={styles.delete} onClick={handleClick}> <Lixeira/> </button>
      }

    </>
  )
}

export default PhotoDelete
