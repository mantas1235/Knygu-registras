import './App.css';
import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import Home from './pages/home';
import NewPost from './pages/newPost';
import NoPage from './pages/noPage';
import Edit from './pages/edit';
import SinglePost from './pages/singlePost';
import Header from './components/header';
import Register from './pages/register';
import Login from './pages/login';
import Logout from './pages/logout';
import Books from './pages/books';



const App = ()=> {

  const [loggedIn, setLoggedIn]= useState(false) 


  useEffect(()=> {
    if(localStorage.getItem('loggedin')==='true')
    setLoggedIn(true)
  }, [])
  return (
    <BrowserRouter>
    <Header loggedIn={loggedIn} />
    <Routes>


        <Route path="/" element={<Home loggedIn={loggedIn} />} />
        
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login setLoggedIn={setLoggedIn}/>} />
        <Route path="/logout" element={<Logout setLoggedIn={setLoggedIn}/>} />
  
        <Route path="/single-post/:id" element={<SinglePost/>} />
        <Route path='*' element={<NoPage />} />
{
  loggedIn && 
  <>
  
  <Route path="/new-post" element={<NewPost/>} />
        <Route path="/edit/:id" element={<Edit/>} />
        <Route path="/books" element={<Books/>} />

  </>
}

        
    </Routes>
  </BrowserRouter>
  )

}

export default App;
