import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './single.css'

const SinglePost = () => {
  const [post, setPost] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("/api/route/" + id)
      .then((resp) => {
        console.log(resp);
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

  return (
    <div className="container_show_post">
    
        <div className="title">
          <h1>{post.Pavadinimas}</h1>
        </div>
        <div className="image">
          <img src={post.Nuotrauka} alt='Nuotrauka' />
        </div>

        <div className="Table">
        <table>
  <td>
    <th>Autorius</th>
    <th>Virselio Autorius</th>
    <th>ISBN</th>
  </td>
  <td>
    <td>{post.Autorius}</td>
    <td>{post.Virselio_autorius}</td>
    <td>{post.ISBN_kodas}</td>
  </td>

</table>

        </div>

        <div className="autorius">
            <p>{post.Autorius}</p>
             </div>
    
    </div>
  );
};

export default SinglePost