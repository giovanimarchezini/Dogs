import React from 'react'
import Error404 from '../Assets/404.jpg';

const NotFound = () => {
  return (
    <div className='container mainContainer'>
        <h1 className='title'>Erro:404</h1>
        <p>Página não encontrada</p>
        <img src={Error404} alt="Página não encontrada" style={{marginTop:'2rem', borderRadius:'8px'}} />
    </div>
  )
}

export default NotFound;
