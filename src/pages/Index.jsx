import { Link } from "react-router-dom";
import { useState } from "react";

export default function Index({ artist, createArtist }) {
  const [form, setForm] = useState({
    name: "",
    image: "",
    date: "",
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
      date: "",
      description: "",
    });
  };

  // loaded function
  const loaded = () =>
    artist.map((artist) => (
      <div className='main-content'>
        <div className='wrapper'>
          <div key={artist.id} className="artist">
            <Link to={`/artist/${artist.id}`}>
              <h1 className='latest'>{artist.name}</h1>
            </Link>
            <div className='latest-grid'>
              <div className='latest-grid-item one'>
                <img className="artist-image" src={artist.image} alt={artist.name} />
                {/* <h3>{artist.link}</h3> */}
                <h3>{artist.date}</h3>
                <h2>{artist.description}</h2>
              </div>
            </div>
          </div>
        </div>
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
          name="date"
          placeholder="date"
          value={form.date}
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          placeholder="description"
          value={form.description}
          onChange={handleChange}
        />
        <input type="submit" value="Submit" />
      </form>
      {artist ? loaded() : loading()}
    </section>
  );
}
