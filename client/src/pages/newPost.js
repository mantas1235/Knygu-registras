import { useState } from "react";
import axios from "axios";
import '../components/style/newPost.css'

    const NewPost = () => {
        const [postForm, setPostForm] = useState({
          title: "",
          content: "",
          image: "",
        });
        const handleForm = (e) => {
            setPostForm({ ...postForm, [e.target.name]: e.target.value });}

            const handleSubmit = (e) => {
                e.preventDefault();
            
                const form = new FormData
            
                for(const key in postForm){
                  form.append(key,postForm[key])
                }
            
                axios.post("/api/posts/", form)
                  .then((resp) => console.log(resp));
              };



    return (
        <div className='newPost'>
          <h1>Prideti naują Knygą</h1>
          <form onSubmit={(e) => handleSubmit(e)} className='form_newPost'>
            <div className= "pavadinimas" >
              <label>Pavadinimas</label>
              <input type="text" name="Pavadinimas" onChange={(e) => handleForm(e)}  />
            </div>
            <div className='autor'>
              <label>Autorius</label>
              <input type='text' name="Autorius" onChange={(e) => handleForm(e)} />
            </div>
            <div className='virselio_autorius'>
              <label>Virselio autorius</label>
              <input type="text" name="Virselio_autorius" onChange={(e) => handleForm(e)} />
            </div>
            <div className='isbn'>
              <label>ISBN Kodas</label>
              <input type="text" name="ISBN_kodas" onChange={(e) => handleForm(e)} />
            </div>
            <div className='nuotrauka'>
              <label>Nuotrauka</label>
              <input type="text" name="Nuotrauka" onChange={(e) => handleForm(e)} />
            </div>
            <button className='button_prideti'>Prideti</button>
          </form>
        </div>
      );
}

export default NewPost