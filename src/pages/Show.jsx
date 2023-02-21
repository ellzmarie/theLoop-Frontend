import { useParams, useNavigate } from "react-router";
import { useState } from "react";

export default function Show({ artists, updateArtist, deleteArtist }) {
  const { id } = useParams();
  const artist = artists.find((artist) => parseInt(artist.id) === parseInt(id));
  const navigate = useNavigate();

  const [editForm, setEditForm] = useState(artist);

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
        <h1 className='latest'>{artist?.name}</h1>
        <img className='artist-img' src={artist?.image} alt={artist?.name} />
          <h4 className='artist-details'>{artist?.release_date}</h4>
          <p>{artist?.description}</p>
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
                <p>artist info: <input
                  className="textbox"
                  type="text"
                  name="description"
                  placeholder="enter artist info"
                  value={editForm?.description}
                  onChange={handleChange}
                /></p>
                <button type="submit">update Artist</button>
              </form>
              <button id="DELETE" onClick={removeArtist}>
                delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
