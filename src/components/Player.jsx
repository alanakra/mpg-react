import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

export default function Player() {
    const { id } = useParams();
    const [searchParams] = useSearchParams();
    const clubId = searchParams.get('clubid');
    const firstName = searchParams.get('firstname');
    const lastName = searchParams.get('lastname');
    const [totalPlayedMatches, setTotalPlayedMatches] = useState('');
    const [totalStartedMatches, setTotalStartedMatches] = useState('');
    const [totalGoals, setTotalGoals] = useState('');
    const [totalMinutesPlayed, setTotalMinutesPlayed] = useState('');
    const [totalYellowCard, setTotalYellowCard] = useState('');
    const [totalRedCard, setTotalRedCard] = useState('');
    const [totalCleanSheet, setTotalCleanSheet] = useState('');

    useEffect(() => {
        async function fetchPlayer() {
            try {
                const response = await axios.get(
                    `https://api.mpg.football/api/data/championship-player-stats/${id}/2022`
                );
                const dataPlayer = response.data.championships['1'].total.stats;
                console.log(dataPlayer);
                const { 
                    totalPlayedMatches, 
                    totalStartedMatches, 
                    totalGoals,
                    totalMinutesPlayed,
                    totalYellowCard,
                    totalRedCard,
                    totalCleanSheet} = dataPlayer;
                setTotalPlayedMatches(totalPlayedMatches);
                setTotalStartedMatches(totalStartedMatches);
                setTotalGoals(totalGoals);
                setTotalMinutesPlayed(totalMinutesPlayed);
                setTotalGoals(totalGoals);
                setTotalYellowCard(totalYellowCard);
                setTotalRedCard(totalRedCard);
                setTotalCleanSheet(totalCleanSheet);


            } catch (error) {
                console.log(error);
            }
        }
        fetchPlayer();
    }, [id]);
    return (
        <div className="text-2xl">
            <h1 className="text-3xl mb-2">Chiffres clés de {firstName != 'null' ? firstName : ''} {lastName}</h1>
            <p>Nombre de match joués: {totalPlayedMatches} / 38 (ratio de {((totalPlayedMatches / 38) * 100).toFixed(0)}%)</p>
            <p>Nombre de match débutés: {totalStartedMatches} / {totalPlayedMatches}</p>
            <p>Nombre de buts: {totalGoals}</p>
            <p>Total de minutes jouées: {totalMinutesPlayed}</p>
            <label htmlFor="playedMatches">Match joués</label>
            <div className="flex">
                <span>{totalPlayedMatches} Matchs</span>
                <progress className="mx-2" id="playedMatches" max="38" value={totalPlayedMatches}></progress>
                <span>38 Matchs</span>
            </div>
        </div>
    );
}