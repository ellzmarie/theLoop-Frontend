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
    <div className="artist-show">
      <div className="show-info">
      <h1>{artist?.name}</h1>
      {/* <h2>{artist?.title}</h2> */}
      <img src={artist?.image} alt={artist?.name} />

      <form onSubmit={handleSubmit}>
        <p>name: <input
          type="text"
          name="name"
          placeholder="name"
          value={editForm?.name}
          onChange={handleChange}
        /></p>
        <p>image link: <input
          type="text"
          name="image"
          placeholder="image"
          value={editForm?.image}
          onChange={handleChange}
        /></p>
        <p>date: <input
          type="text"
          name="date"
          placeholder="release date"
          value={editForm?.date}
          onChange={handleChange}
        /></p>
        <p>artist info: <input
          className="textbox" 
          type="text"
          name="description"
          placeholder="artist info"
          value={editForm?.description}
          onChange={handleChange}
        /></p>
        <button type="submit">Update Artist</button>
      </form>
      <p><button id="DELETE" onClick={removeArtist}>
        Delete
      </button></p>
      </div>
    </div>
  );
}
