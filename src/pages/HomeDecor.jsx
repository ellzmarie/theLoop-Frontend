import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router";
import { useState } from "react";

export default function HomeDecor({entry}){
    console.log(entry)
    const loaded = () =>
        entry.map((entry) => (
            <div className='main-content'>
                <div className='wrapper'>
                    <div key={entry.id}>
                        <div className='latest-grid'>
                            <div className='latest-grid-item'>
                                <Link to={`/artist/${entry.id}`}>
                                    <h2 className='latest-grid'>{entry.name}</h2>
                                </Link>
                                <img src={entry.image} alt={entry.name} />
                                <h3>{entry.release_date}</h3>
                                <hr />
                                <h4>{entry.description}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ));

    const loading = () => <h1>Loading...</h1>;

    return (
        <div>
            {entry ? loaded() : loading()}
        </div>
    )
}