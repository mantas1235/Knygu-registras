import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../components/style/register.css'




    const Register = () => {
    const [form, setForm]= useState({
            Vardas: '',
            Pavarde: '',
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
    axios.post('/api/user/register', form)
    .then (resp => {
        setAlert({
            message: resp.data.message,
            status: 'success'
        })
setTimeout(()=> navigate('/'), 2000)

    })
    .catch(error =>{
        setAlert({
            message: error.response.data,
            status: 'danger'
        })
    })
    
    }


    return (
        <div className='registracija'>
        <h1>Registracija</h1>
        {alert.message && (
        <div className={"alert alert-" + alert.status}>{alert.message}</div>
      )}
        <form onSubmit={handleSubmit} className='regForm'>
          <div className='regVardas'>
            <label>Vardas</label>
            <input
              type="text"
              name="Vardas" onChange={handleForm} />
          </div>
          <div className='regPavarde'>
            <label>Pavarde</label>
            <input
              name="Pavarde" onChange={handleForm}
            ></input>
          </div>
          <div className='regPastas'>
            <label>El. Pastas</label>
            <input
              type="email"
              name="Pastas"onChange={handleForm}  />
          </div>
          <div className='regSlaptazodis'>
            <label>Slaptazodis</label>
            <input
              type="password"
              name="Slaptazodis" onChange={handleForm} />
          </div>
          <div className="button">
          <button className="btn btn-primary">Prideti</button>
          </div>
        </form>
      </div>

    )
}


export default Register