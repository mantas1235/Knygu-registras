import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../components/style/login.css'



const Login = (props) => {
  const {setLoggedIn}= props
    
        const [form, setForm]= useState({
                Pastas: '',
                Slaptazodis:''
        })
    
        const [alert, setAlert] = useState({
            message: "",
            status: "",
          });
    
        const navigate= useNavigate()
    
        const handleForm = (e) => {
            setForm({ ...form, [e.target.name]: e.target.value });
        
        }
        const handleSubmit = (e) => {
            e.preventDefault()
        axios.post('/api/user/login/', form)
        .then (resp => {
           localStorage.setItem('loggedin', true)
           setLoggedIn(true)
            setAlert({
                message: resp.data.message,
                status: 'success'
            })
    setTimeout(()=>{
        navigate('/')
    } ,
     2000)
    

        })
        .catch(error =>{
            setAlert({
                message: error.response.data,
                status: 'danger'
            })
        })
        
        }
    
    
        return (
            <div className='login'>
            <h1>Prisijungimas</h1>
            {alert.message && (
            <div className={"alert alert-" + alert.status}>{alert.message}</div>
          )}
            <form onSubmit={handleSubmit} className='loginForm'>
              <div className='logPastas'>
                <label>El. Pastas</label>
                <input
                  type="email"
                  name="Pastas"onChange={handleForm}  />
              </div>
              <div className='logSlaptazodis'>
                <label>Slaptazodis</label>
                <input
                  type="password"
                  name="Slaptazodis" onChange={handleForm} />
              </div>
              <button className="btn btn-primary">Prideti</button>
            </form>
          </div>
    
        )
    }



export default Login