import { useState } from 'react'
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import User from './Components/User/User';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import { UserStorage } from './UserContext';
import ProtectedRoute from './Components/Elementos de interface/ProtectedRoute/ProtectedRoute';
import Photo from './Components/Photo/Photo';
import UserProfile from './Components/User/UserProfile';
import NotFound from './Pages/NotFound';


function App() {

  return (
    
   <div className='App'>
    <BrowserRouter>
    <UserStorage>
    <Header/>
    <main className='AppBody'>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="login/*" element={<Login/>} />
        <Route path="conta/*" element={<ProtectedRoute><User/></ProtectedRoute>} />
        <Route path="foto/:id" element={<Photo/>}/>
        <Route path="perfil/:user" element={<UserProfile/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </main>
    <Footer/>
    </UserStorage>
    </BrowserRouter>
   </div>
  )
}

export default App
