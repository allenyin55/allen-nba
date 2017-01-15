import React from 'react';
let rank = 0;

const url = "https://allen-nba-api.herokuapp.com";

export default class RenderConference extends React.Component{

    renderList(singleTeamData){
        let style = {
            fontSize: 15+'px'
        };
        const {getTeamById} = this.props;
        const {team_stats} = singleTeamData;
        if(rank===15) rank=0;
        rank+=1;

        return(
            <tr key={singleTeamData.id}>
                <td>{rank}</td>
                <td style={style}>
                    <image src={`${url}/images/${getTeamById[singleTeamData.id].abbr}.png`} className="teamIcon"/>
                    <div>{getTeamById[singleTeamData.id].team}</div>
                </td>
                <td>{team_stats.wins}</td>
                <td>{team_stats.losses}</td>
                <td>{team_stats.gb_conf}</td>
                <td>{team_stats.l10}</td>
            </tr>
        )
    }

    render() {
        const {teamData} = this.props;

        let style = {
            width: 10+'%',
        };

        return(
        <table className="table table-bordered" id="standingsTable" >
            <thead>
            <tr>
                <th style={style}>#</th>
                <th>Team</th>
                <th style={style}>W</th>
                <th style={style}>L</th>
                <th style={style}>GB</th>
                <th style={style}>L10</th>
            </tr>
            </thead>
            <tbody>
            { teamData.map(this.renderList.bind(this)) }
            </tbody>
        </table>
        )
}

}