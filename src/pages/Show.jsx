import { useParams, useNavigate } from "react-router";
import { useState } from "react";

export default function Show({ entries, updateArtist, deleteArtist }) {
  const { id } = useParams();
  const entry = entries.find((entry) => parseInt(entry.id) === parseInt(id));
  const navigate = useNavigate();

  const [editForm, setEditForm] = useState(entry);

  const handleChange = (evt) => {
    setEditForm({
      ...editForm,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    updateArtist(editForm, id);
    navigate("/");
  };

  const removeArtist = () => {
    deleteArtist(id);
    navigate("/");
  };

  return (
    <div className="main-content">
      <div className="wrapper">
        <h1 className='latest'>{entry?.name}</h1>
        <img className='artist-img' src={entry?.image} alt={entry?.name} />
        <h4 className='artist-details'>{entry?.release_date}</h4>
        <p>{entry?.description}</p>
      </div>
      <hr />
      <p></p>

      <div className='main-content'>
        <div className='wrapper'>
          <div className='latest-grid'>
            <div className='latest-grid-item one'>

              <form onSubmit={handleSubmit}>
                <p>name: <input
                  type="text"
                  name="name"
                  placeholder="enter name"
                  value={editForm?.name}
                  onChange={handleChange}
                /></p>
                <p>image link: <input
                  type="text"
                  name="image"
                  placeholder="enter image link"
                  value={editForm?.image}
                  onChange={handleChange}
                /></p>
                <p>date: <input
                  type="text"
                  name="release_date"
                  placeholder="enter release date"
                  value={editForm?.release_date}
                  onChange={handleChange}
                /></p>
                <p>info: <input
                  className="textbox"
                  type="text"
                  name="description"
                  placeholder="enter info"
                  value={editForm?.description}
                  onChange={handleChange}
                /></p>
                <p>category: <input
                  className="text"
                  type="text"
                  name="category"
                  placeholder="enter category"
                  value={editForm?.category}
                  onChange={handleChange}
                /></p>
                <button type="submit">update</button>

                <button id="DELETE" onClick={removeArtist}>
                  delete
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
