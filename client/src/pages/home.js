import {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';


const Home = ((props)=> {
  const {loggedIn}= props

    const [posts, setPosts]= useState([])

    const [alert, setAlert]= useState({
      message: '',
      status: ''
    })
  
    useEffect(() => {
    axios.get('/api/route/')
    .then(resp => {
       setPosts(resp.data)
    })
   
    }, [alert])
    const handleDelete = (id) => {
      if (isNaN(id))
      
      return;
  
    axios.delete("/api/route/delete/" + id)
    .then((resp) => {
      setAlert({
        message: resp.message,
        status: "success",
      });
      window.scrollTo(0, 0);
    })
    .finally(() => {
      setTimeout(
        () =>
          setAlert({
            message: "",
            status: "",
          }),
        3000
      );
    })
  
    .catch((error) => {
      setAlert({
        message: "Ivyko serverio klaida",
        status: "danger",
      });
    });
  };
  
  return (
    <div className='container'>
  {posts.length && posts.map(knygos =>{
    return (
      <div key={knygos.id} className='box'>
        <p className='header'>{knygos.Pavadinimas}</p>
        <img src={knygos.Nuotrauka} alt='nuotrauka' className='image' />
  <div className='autorius'>
  <span>{knygos.Autorius}</span>
  <span>{knygos.Virselio_autorius}</span>
  <span>{knygos.ISBN_kodas}</span>
  </div>
  
  <div className='button'>
    <Link to={'/single-post/'+knygos.id} className='link_single'>Skaityti placiau</Link>
    
    
    {loggedIn && <>
<Link to={'/edit/'+knygos.id} className='link_single'>Redaguoti Info</Link>
  
    <button onClick={(e) => handleDelete(knygos.id)} className='btn_delete'>Trinti</button>
  </>

    }
    </div>
  
      </div>
    )
  })}
  
  
  
  
    </div>
  )
  
  
})

export default Home