import { useEffect } from 'react';
import axios from 'axios';

export default function PlayerList() {
    useEffect(() => {
        async function fetchPlayers() {
            const response = await axios.get(
                "https://api.mpg.football/api/data/championship-players-pool/1"
            );
            const playersList = response.data.poolPlayers;
            console.log(playersList);
        }
        fetchPlayers();
    }, []);
    return (
        <div>
            <h1 className="text-3xl text-center mt-8 mb-4">Liste des joueurs</h1>
        </div>
    );
}