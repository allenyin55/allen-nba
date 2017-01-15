import axios from 'axios';

const ALLEN_NBA_URL = "https://allen-nba-api.herokuapp.com/api";
const ALLEN_NBA_URL_DEV =  "http://localhost:3000/api";

export const FETCH_PLAYER = 'FETCH_PLAYER';
export const FETCH_STAT = 'FETCH_STAT';
export const FETCH_STANDINGS = 'FETCH_STANDINGS';
export const FETCH_GAMES = 'FETCH_GAMES';

export function fetchPlayer(term) {
    const request = axios.post(`${ALLEN_NBA_URL_DEV}/players`,term);

    return{
        type: FETCH_PLAYER,
        payload: request
    }
}

export function fetchStandings() {
    const request = axios.get(`${ALLEN_NBA_URL_DEV}/standings`);

    return{
        type: FETCH_STANDINGS,
        payload: request
    }

}

export function fetchGames() {
    const request = axios.get(`${ALLEN_NBA_URL_DEV}/games`);

    return{
        type: FETCH_GAMES,
        payload: request
    }

}

