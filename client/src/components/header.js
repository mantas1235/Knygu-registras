
import './style/header.css'
import { Link } from 'react-router-dom'

const Header = (props)=>{

  const loggedIn= props.loggedIn


  return (
        
<div className="container_header">
    <header className="d-flex flex-wrap align-items-center  py-3 mb-4 header">

      <ul className="nav col-12 col-md-auto mb-2  mb-md-0">
        <li ><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Library-logo.svg/388px-Library-logo.svg.png'  className='logo'/></li>
        <li className='nav-item'><Link to="/" className="nav-link px-2 link-secondary"><h2>Manto Biblioteka</h2></Link></li>
    
    {loggedIn ? (
      <>
<li className='nav-item'>
           <Link to="/new-post" className="naujasPostas">Prideti nauja Knyga  </Link>
        </li>
        <Link to="/books" className="naujasPostas">Knygų Sarašas </Link>

        <li className='nav-item'><Link to="/logout" className="btn btn-outline-primary me-2">Atsijungti</Link></li>

</>
    ):(
    <div className='buttons'>
        <li className='nav-item'><Link to="/login" className="btn btn-outline-primary me-2">Prisijungti</Link></li>
        <li className='nav-item'><Link to="/register" className="btn btn-primary">Registruotis</Link></li>
</div>

    )}
        
        
         </ul>
    </header>
  </div>

    )
}

export default Header