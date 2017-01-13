import { FETCH_PLAYER, FETCH_STAT } from '../actions/index';
const INITIAL_STATE = { all:[] }

export default function (state=INITIAL_STATE, action) {
    switch (action.type){
        case FETCH_PLAYER:
            console.log(action.payload.data)
            return {...state, all: state.all.concat([action.payload.data.resultSets])}; //avoid state.push[] which mutates the state
        default:
            return state;
    }
}