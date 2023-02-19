import { Link } from "react-router-dom";
import { useState } from "react";

export default function Index({ artist, createArtist }) {
  const [form, setForm] = useState({
    name: "",
    image: "",
    link: "",
    description: "",
  });

  const handleChange = (evt) => {
    setForm({
      ...form,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    createArtist(form);
    setForm({
        name: "",
        image: "",
        link: "",
        description: "",
    });
  };

  // loaded function
  const loaded = () =>
    artist.map((artist) => (
      <div key={artist._id} className="artist">
        <Link to={`/artist/${artist.id}`}>
          <h1>{artist.name}</h1>
        </Link>
        <img src={artist.image} alt={artist.name} />
        <h3>{artist.title}</h3>
      </div>
    ));

  const loading = () => <h1>Loading...</h1>;

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="image"
          placeholder="image"
          value={form.image}
          onChange={handleChange}
        />
        <input
          type="text"
          name="title"
          placeholder="title"
          value={form.title}
          onChange={handleChange}
        />
        <input type="submit" value="Submit"/>
      </form>
      {artist ? loaded() : loading()}
    </section>
  );
}
