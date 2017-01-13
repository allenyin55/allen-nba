import { FETCH_PLAYER, FETCH_STAT, FETCH_PLAYERID } from '../actions/index';
const INITIAL_STATE = { all:[], personId: null }

export default function (state=INITIAL_STATE, action) {
    switch (action.type){
        case FETCH_PLAYER:
            return {...state, all: state.all.concat([action.payload.data.resultSets])}; //avoid state.push[] which mutates the state
        case FETCH_PLAYERID:
            return {...state, personId: action.payload.data.personId};
        default:
            return state;
    }
}