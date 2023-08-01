import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../Hooks/useFetch/useFetch';
import { PHOTO_GET } from '../../api';
import Error from '../Elementos de interface/Error/Error';
import Loading from '../Elementos de interface/Loading/Loading';
import PhotoContent from './PhotoContent';

const Photo = () => {
  const {id} = useParams();
  const{data, loading, error, request} = useFetch();

  React.useEffect(()=>{
      const {url, options} = PHOTO_GET(id);
      request(url, options);
  },[id, request]);

  if(error) return <Error error={error}/>
  if(loading) return <Loading loading={loading}/>
  if(data)
  return (
    <section className='container mainContainer'>
      <PhotoContent single={true} data={data}/>
    </section>
  )
  else return null
}

export default Photo
