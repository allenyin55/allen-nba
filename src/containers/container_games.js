import React from 'react';
import { connect } from 'react-redux';
import { fetchGames } from '../actions/index';
import GameWidget from '../components/game_widget'

class Games extends React.Component{

    componentWillMount(){
        this.props.fetchGames();
    }

    renderGames(game) {
        return (
            <tr key={game.id}>
                <GameWidget game={game}/>
            </tr>
        )
    }

    render(){

        const { games } = this.props.games;

        console.log(games);

        if (games.length===0){
            return(
                <h6>
                    No Games Today!
                </h6>
            )
        }

        return(
            <table className="table" id="gamesTable">
                <tbody>
                { games.map(this.renderGames) }
                </tbody>
            </table>
        )
    }
}

function mapStateToProps({games}) {
    return {games}
}

export default connect (mapStateToProps, {fetchGames})(Games)