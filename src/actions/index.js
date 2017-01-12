import axios from 'axios';

const ROOT_URL = `http://stats.nba.com/stats/commonplayerinfo/?PlayerID=`;
const STAT_URL = `http://stats.nba.com/stats/playercareerstats/?PerMode=PerGame&PlayerID=`

export const FETCH_PLAYER = 'FETCH_PLAYER';
export const FETCH_STAT = 'FETCH_STAT';

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

