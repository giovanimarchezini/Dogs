import React from 'react';
import FeedPhotosItems from './FeedPhotosItems';
import useFetch from '../../Hooks/useFetch/useFetch';
import Error from '../Elementos de interface/Error/Error';
import { PHOTOS_GET } from '../../api';
import Loading from '../Elementos de interface/Loading/Loading';
import styles from './FeedPhotos.module.css';


const FeedPhotos = ({setModalPhoto}) => {
  const {data, loading, error, request} = useFetch();
  React.useEffect(()=>{
    async function fetchPhotos(){
     const {url, options} = PHOTOS_GET({page: 1, total:6, user: 0});
     const {response, json} = await request(url, options);
    }
    fetchPhotos();
  },[request]);
 

  if(error) return <Error error={error}/>;
  if(loading) return <Loading/>;
  if(data)
  return (
    <ul className={`${styles.feed} animeLeft`}>
      {data.map((photo) => (<FeedPhotosItems key={photo.id} photo={photo}  setModalPhoto={setModalPhoto}/>))}
    </ul>
  );
else return null;

}

export default FeedPhotos
