import { FETCH_GAMES } from '../actions/index';
const INITIAL_STATE = { games: [] }

export default function (state = INITIAL_STATE, action) {
    switch (action.type){
        case FETCH_GAMES:
            return{...state, games: action.payload.data}
        default:
            return state;
    }
}