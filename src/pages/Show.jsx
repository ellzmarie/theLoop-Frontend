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
    <div className="artist">
      <h1>{artist?.name}</h1>
      <h2>{artist?.title}</h2>
      <img src={artist?.image} alt={artist?.name} />
      <button id="DELETE" onClick={removeArtist}>
        Delete
      </button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={editForm?.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="image"
          placeholder="image"
          value={editForm?.image}
          onChange={handleChange}
        />
        <input
          type="text"
          name="title"
          placeholder="title"
          value={editForm?.title}
          onChange={handleChange}
        />
        <button type="submit">Add Artist</button>
      </form>
    </div>
  );
}
