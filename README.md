# React Exercice - MPG 🐐

Goal: create a mini-application that manages 3 endpoints to display the statistics of MonPetitGazon API players in Ligue 1 and a detailed player sheet.

We need to be able to filter this list based on a player's name and position.
Clicking on an item in the list should send you to a detailed sheet.
The 3 endpoints : 

Returns the list of clubs:
GET : 

    https://gist.githubusercontent.com/alanakra/57f0a8eda06470c03203728b8a8c4741/raw/c890228da9e7a21ddb266e2ae7dda1658662a548/clubs-ligue1.json

Return the list of players
GET 

    https://api.mpg.football/api/data/championship-players-pool/1

To define player positions, use the ultraPosition id.

Goalkeeper - L: 10
Defender - D: 20
Full Back - L: 21
Defensive midfielder - MD: 30
Attacking midfielder - MO: 31
Attacker - A : 40

Show details of a player
GET

    https://api.mpg.football/api/data/championship-player-stats/mpg_championship_player_100632/2022