import { useState, useEffect } from 'react';
import axios from 'axios';

export default function ClubList() {
    const [clubs, setClubs] = useState([]);

    useEffect(() => {
        async function fetchClubs() {
        const response = await axios.get(
            "https://api.mpg.football/api/data/championship-clubs"
        );
        const championshipClubs = response.data.championshipClubs;
        setClubs(championshipClubs);
    }

    fetchClubs();
    }, []);

    return (
    <div>
        <h1 className="text-3xl text-center mb-4">Liste des clubs</h1>
        <select id="select-club" onChange={submitClub}>
            {Object.keys(clubs).map((clubId) => {
                const club = clubs[clubId];
                return <option key={club.id} id={club.id}>{club.name["fr-FR"]}</option>;
            })}
        </select>
    </div>
    );
}
