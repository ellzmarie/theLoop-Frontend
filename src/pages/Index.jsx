import { Link } from "react-router-dom";
import { useState } from "react";

export default function Index({ artist, createArtist }) {
  const [form, setForm] = useState({
    name: "",
    image: "",
    release_date: "",
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
      release_date: "",
      description: "",
    });
  };

  // loaded function
  const loaded = () =>
    artist.map((artist) => (
      <div className='main-content'>
        <div className='wrapper'>
          <div key={artist.id}>
            <div className='latest-grid'>
              <div className='latest-grid-item'>
                <Link to={`/artist/${artist.id}`}>
                  <h2 className='latest-grid'>{artist.name}</h2>
                </Link>
                <img src={artist.image} alt={artist.name} />
                <h3>{artist.release_date}</h3>
                <hr />
                <h4>{artist.description}</h4>
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
          name="release_date"
          placeholder="date"
          value={form.release_date}
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
