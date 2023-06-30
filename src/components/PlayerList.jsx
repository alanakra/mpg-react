import { useEffect, useState } from 'react';
import axios from 'axios';

export default function PlayerList() {
    const [filteredPlayers, setFilteredPlayers] = useState([]);
    useEffect(() => {
        async function fetchPlayers() {
            const response = await axios.get(
                "https://api.mpg.football/api/data/championship-players-pool/1"
            );
            const playersList = response.data.poolPlayers;
            console.log(playersList);
            setFilteredPlayers(playersList);
        }
        fetchPlayers();
    }, []);
    return (
        <div>
            <h1 className="text-3xl text-center mt-8 mb-4">Liste des joueurs</h1>
            <select id="positionFilter">
                <option value="">Toutes</option>
                <option value="10">Gardien - G</option>
                <option value="20">Defenseur - D</option>
                <option value="21">Lateral - L</option>
                <option value="30">Milieu défensir - MD</option>
                <option value="31">Milieu offensif - MO</option>
                <option value="40">Attaquant - A</option>
            </select>
            <ul>
                {filteredPlayers.map((player) => (
                    <li key={player.id}>{player.firstName} {player.lastName}</li>
                ))}
            </ul>
        </div>
    );
}