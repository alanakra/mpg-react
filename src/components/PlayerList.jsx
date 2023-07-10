import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function PlayerList() {
    const [filteredPlayers, setFilteredPlayers] = useState([]);
    const [filteredPosition, setFilteredPosition] = useState("");
    const [selectedClub, setSelectedClub] = useState("");
    const [clubs, setClubs] = useState([]);
    const [name, setName] = useState("");
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        async function fetchClubs() {
        const response = await axios.get(
            "https://gist.githubusercontent.com/alanakra/57f0a8eda06470c03203728b8a8c4741/raw/c890228da9e7a21ddb266e2ae7dda1658662a548/clubs-ligue1.json"
        );
        const championshipClubs = response.data.championshipClubs;
        setClubs(championshipClubs);
    }

    fetchClubs();
    }, []);

    useEffect(() => {
        async function fetchPlayers() {
            const response = await axios.get(
                "https://api.mpg.football/api/data/championship-players-pool/1"
            );
            const playersList = response.data.poolPlayers;
            setPlayers(playersList);
            setFilteredPlayers(playersList);
        }
        fetchPlayers();
    }, []);

    useEffect(() => {
        filterPlayers();
    }, [name, filteredPosition, selectedClub])

    function submitClub(e) {
        e.preventDefault();
        const selectedIndex = e.target.selectedIndex;
        const selectedOption = e.target.options[selectedIndex].id;
        setSelectedClub(selectedOption);
    }

    function handleChangePosition(e) {
        setFilteredPosition(e.target.value);
    }

    function typePlayer(e) {
        setName(e.target.value);
    }

    const filterPlayers = () => {
        let filteredPlayers = players;

        if (selectedClub !== '') {
            filteredPlayers = filteredPlayers.filter((player) => {
                return player.clubId === selectedClub;
            });
        }
    
        if (name !== '') {
          filteredPlayers = filteredPlayers.filter((player) =>
            player.lastName.toLowerCase().includes(name.toLowerCase())
          );
        }
    
        if (filteredPosition !== '') {
          filteredPlayers = filteredPlayers.filter((player) => player.ultraPosition.toString() === filteredPosition);
        }
    
        setFilteredPlayers(filteredPlayers);
    };

    return (
        <div>
            <h1 className="text-3xl text-center mt-8 mb-4">Liste des joueurs</h1>
            <div>
                <label htmlFor="select-club" className="text-center mr-4 mb-4">Clubs : </label>
                <select id="select-club" onChange={submitClub}>
                    <option value="" id="">--Please choose an option--</option>
                    {Object.keys(clubs).map((clubId) => {
                        const club = clubs[clubId];
                        return <option key={club.id} id={club.id}>{club.name["fr-FR"]}</option>;
                    })}
                </select>
            </div>

            <div>
                <label htmlFor="positionfilter" className="mr-4">Position : </label>
                <select id="positionFilter" value={filteredPosition} onChange={handleChangePosition}>
                    <option value="">Toutes</option>
                    <option value="10">Gardien - G</option>
                    <option value="20">Defenseur - D</option>
                    <option value="21">Lateral - L</option>
                    <option value="30">Milieu défensir - MD</option>
                    <option value="31">Milieu offensif - MO</option>
                    <option value="40">Attaquant - A</option>
                </select>
            </div>
            <div className="mb-2">
                <label htmlFor="nameFilter" className="mr-4">Filtrer par nom : </label>
                <input
                type="text"
                id="nameFilter"
                name="nameFilter"
                placeholder="Messi, Le Fée, David, Cherki"
                onChange={typePlayer}
                />
            </div>
            <ul>
                {filteredPlayers.length === 0 ? <p>Aucun joueur sélectionable</p> : ''}
                {filteredPlayers.map((player) => (
                    <li key={player.id}>
                        <Link className="hover:underline" to={`/players/${player.id}?clubid=${player.clubId}&firstname=${player.firstName}&lastname=${player.lastName}`}>
                            {player.firstName} {player.lastName}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}