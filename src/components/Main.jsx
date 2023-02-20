import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Index from "../pages/Index";
import Show from "../pages/Show";


// This is the moment you have been waiting for, lets connect Django to React!
const URL = 'http://localhost:8000/artist/'


export default function Main() {
  const [artist, setArtist] = useState([]);

  // INDEX
  const getArtist = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    setArtist(data)
}

  // CREATE
  const createArtist = async (artist) => {
    // fetch - POST
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(artist),
    });
    getArtist();
  };

  // UPDATE
  const updateArtist = async (artist, id) => {
    // fetch - PUT
    await fetch(URL + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(artist),
    });
    getArtist();
  };


  // DELETE
  const deleteArtist = async (id) => {
    // fetch - DELETE
    await fetch(URL + id, { 
      method: "DELETE", 
    });
    getArtist();
  };

  useEffect(() => {
    getArtist();
  }, []);

  return (
    <main>
      <Routes>
        <Route
          path="/"
          element={<Index artist={artist} createArtist={createArtist} />}
        />
        <Route
          path="/artist/:id"
          element={
            <Show
              artists={artist}
              deleteArtist={deleteArtist}
              updateArtist={updateArtist}
            />
          }
        />
      </Routes>
    </main>
  );
}
