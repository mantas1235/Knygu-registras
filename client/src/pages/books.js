import { useState, useEffect } from "react"
import axios from "axios"
import '../components/style/books.css'

const Books = (()=> {

const [table, setTable]= useState([])



useEffect(() => {
    axios.get('/api/route/')
    .then(resp => {
console.log(resp);
       setTable(resp.data)
    })
   
    }, [])




    return (
        <div className="table_container">
            {table.length && table.map(lentele =>{
return (
    <div key={lentele.id} className='box'>
        <table className="table">
  <tr>
    <th>Pavadinimas</th>
    <th>Autorius</th>
    <th>Virselis</th>
    <th>ISBN kodas</th>                               
  </tr>
  <tr>
  <td>{lentele.Pavadinimas}</td>
    <td>{lentele.Autorius}</td>
    <td>{lentele.Virselio_autorius}</td>
    <td>{lentele.ISBN_kodas}</td>
  </tr>

</table>
        
        </div>
)

            })}




        </div>
    )



})

export default Books