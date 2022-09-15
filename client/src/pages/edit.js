import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../components/style/edit.css'

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState({
    title: "",
    content: "",
    post: "",
  });

  useEffect(() => {
    axios.get("/api/route/" + id)
      .then((resp) => {
        if (!resp.data) {
          navigate("/");
          return;
        }
        setPost(resp.data);
      })
      .catch((error) => {
        console.log(error);
        navigate("/");
      });
  }, []);

  const handleForm = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.put("/api/route/edit/" + id, post)
      .then((resp) => console.log(resp));
  };

  return (
    <div className="container_edit">
      <h1>Paredaguoti knygos info</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="editPavadinimas">
          <label>Pavadinimas</label>
          <input
            type="text"
            name="Pavadinimas"
            onChange={(e) => handleForm(e)}
            value={post.Pavadinimas}
          />
        </div>
        <div className="editAutorius">
          <label>Autorius</label>
          <input
          type='text'
            name="Autorius"
            onChange={(e) => handleForm(e)}
            value={post.Autorius}
          ></input>
        </div>
        <div className="editVirselis">
          <label>Virselio autorius</label>
          <input
            type="text"
            name="Virselio_autorius"
            onChange={(e) => handleForm(e)}
            value={post.Virselio_autorius}
          />
        </div>
        <div className="editISBN">
          <label>ISBN kodas</label>
          <input
            type="text"
            name="ISBN_kodas"
            onChange={(e) => handleForm(e)}
            value={post.ISBN_kodas}
          />
        </div>
        <div className="editNuotrauka">
          <label>Nuotrauka</label>
          <input
            type="text"
            name="Nuotrauka"
            onChange={(e) => handleForm(e)}
            value={post.Nuotrauka}
          />
        </div>

        <button className="btn btn-primary">Prideti</button>
      </form>
    </div>
  );
};

export default Edit