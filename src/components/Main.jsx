import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Index from "../pages/Index";
import Show from "../pages/Show";
import Fashion from "../pages/Fashion";
import HomeDecor from "../pages/HomeDecor";
import Music from "../pages/Music";


// This is the moment you have been waiting for, lets connect Django to React!
const URL = 'http://localhost:8000/artist/'


export default function Main() {
  const [entry, setEntry] = useState([]);
  const [category, setCategory] = useState({
    music: "",
    fashion: "",
    homedecor: "",
  });
  // const [fashion, setFashion] = useState([]);
  // const [homedecor, setHomeDecor] = useState([]);


  // INDEX
  const getArtist = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    setEntry(data)


    let music = data.filter((entry) => entry.category === "music")
    let fashion = data.filter((entry) => entry.category === "fashion")
    let homedecor = data.filter((entry) => entry.category === "homedecor")
    setCategory({
      ...category,
      music: music,
      fashion: fashion,
      homedecor: homedecor,      
    })

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
          element={<Index entry={entry} createArtist={createArtist} />}
        />
        <Route
          path="/fashion"
          element={<Fashion entry={category.fashion} />}
        />
        <Route
          path="/homedecor"
          element={<HomeDecor entry={category.homedecor} />}
        />
        <Route
          path="/music"
          element={<Music entry={category.music} />}
        />  
        <Route
          path="/artist/:id"
          element={
            <Show
            entries={entry}
              deleteArtist={deleteArtist}
              updateArtist={updateArtist}
            />
          }
        />
      </Routes>
    </main>
  );
}
