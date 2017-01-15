import { combineReducers } from 'redux';
import PlayerReducer from './reducer_player';
import StandingsReducer from './reducer_standings';
import GamesReducer from './reducer_games';

const rootReducer = combineReducers({
    player: PlayerReducer,
    standings: StandingsReducer,
    games: GamesReducer
});

export default rootReducer;
