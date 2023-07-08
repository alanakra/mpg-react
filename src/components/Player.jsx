import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Player() {
    let { id } = useParams();
    useEffect(() => {
        async function fetchPlayer() {
            try {
                const response = await axios.get(
                    `https://api.mpg.football/api/data/championship-player-stats/${id}/2022`
                );
                console.log(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchPlayer();
    }, []);
    return (
        <div>
            <h1>Player</h1>
        </div>
    );
}