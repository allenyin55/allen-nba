import axios from 'axios';

const ROOT_URL = `http://stats.nba.com/stats/commonplayerinfo/?PlayerID=`;
const STAT_URL = `http://stats.nba.com/stats/playercareerstats/?PerMode=PerGame&PlayerID=`;
const PLAYERID_URL = "http://localhost:3000/api/players";

export const FETCH_PLAYER = 'FETCH_PLAYER';
export const FETCH_STAT = 'FETCH_STAT';
export const FETCH_PLAYERID = 'FETCH_PLAYERID'

export function fetchPlayerId(term) {
    const request = axios.post(PLAYERID_URL,term);

    return{
        type: FETCH_PLAYERID,
        payload: request
    }
}

export function fetchPlayer(playerId){

    const url = `${ROOT_URL}${playerId}`;
    const request = axios.get(url);

    return{
        type: FETCH_PLAYER,
        payload: request // this is a promise here, before it goes to the reducer, redux-promise
        // checks the payload property, and the stops the action, and wait until the request finishes.
        // Then it unwraps the promise, and dispatches it to the reducers
    };
}

export function fetchStat(playerId) {

    const url = `${STAT_URL}${playerId}`;
    const request = axios.get(url);

    return{
        type: FETCH_STAT,
        payload: request
    }
}

