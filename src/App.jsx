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


function App() {

  return (
    
   <div>
    <BrowserRouter>
    <UserStorage>
    <Header/>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="login/*" element={<Login/>} />
        <Route path="conta/*" element={<ProtectedRoute><User/></ProtectedRoute>} />
      </Routes>
    <Footer/>
    </UserStorage>
    </BrowserRouter>
   </div>
  )
}

export default App
