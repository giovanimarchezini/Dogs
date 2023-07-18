import React from 'react'
import styles from './FeedPhotosItems.module.css';
import Image from '../Elementos de interface/Image/Image';

const FeedPhotosItems = ({photo, setModalPhoto}) => {
  function handleClick(){
    setModalPhoto(photo);
  }
  return (
    <li className={styles.photo} onClick={handleClick}>
      <Image src={photo.src} alt={photo.title}/>
      <span className={styles.vizualizacao}>{photo.acessos}</span>
    </li>
  )
}

export default FeedPhotosItems
