import { FETCH_PLAYER, FETCH_STAT } from '../actions/index';

export default function (state=[], action) {
    switch (action.type){
        case FETCH_PLAYER:
            return state.concat([action.payload.data.resultSets]); //avoid state.push[] which mutates the state
    }
    return state;
}