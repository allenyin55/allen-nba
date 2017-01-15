import React, {Component} from 'react';
import {connect} from 'react-redux';
import RadarChart from '../components/RadarChart';

class PlayerList extends Component {

    renderPlayer(playerData){

        const commonInfo = playerData[0].rowSet[0];
        const headlineStats = playerData[1].rowSet[0];

        const name = commonInfo[3];
        const playerId = headlineStats[0];
        const height = commonInfo[10];
        const weight = commonInfo[11];
        const stats = [headlineStats[3], headlineStats[4], headlineStats[5]];
        const headShotUrl = `http://stats.nba.com/media/players/230x185/${playerId}.png`

        return(
            <tr key={playerId}>
                <td><image src={headShotUrl} style={{width: 145 + 'px'}}/></td>
                <td>{name}</td>
                <td>{height}</td>
                <td>{weight}</td>
                <td className="chartContainer"><RadarChart stats={stats} /></td>
            </tr>
        )
    }

    render(){
        return(
            <table className="table table-hover" id="playerList">
                <thead>
                <tr>
                    <th>Head Shot</th>
                    <th>Name</th>
                    <th>Height</th>
                    <th>Weight</th>
                    <th>Ability</th>
                </tr>
                </thead>
                <tbody>
                {this.props.player.all.map(this.renderPlayer)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps({player}) {
    return {player};
}

export default connect (mapStateToProps)(PlayerList);
