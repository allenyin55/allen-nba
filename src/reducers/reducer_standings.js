import { FETCH_STANDINGS } from '../actions/index';
const INITIAL_STATE = { standings:[] };

export default function (state = INITIAL_STATE, action) {
    switch (action.type){
        case FETCH_STANDINGS:
            return {...state, standings: action.payload.data};
        default:
            return state;
    }
}