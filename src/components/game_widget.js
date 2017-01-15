//check game-status for whether the starts or not, 1 for hasn't started
import React from 'react';
import teamMap from '../utils/team_map';

const url = "https://allen-nba-api.herokuapp.com"

export default class GameWidget extends React.Component{

    constructor (props) {
        super(props);

        let teamMapById = {};
        for (let key in teamMap) {
            teamMapById[teamMap[key].id] = Object.assign({}, teamMap[key], {abbr: key})
        }
        this.teamMapById = teamMapById;
    }

    render(){

        const { game } = this.props;
        const { period_status } = game.period_time;
        const { game_status } = game.period_time;


        let GameTime = "";
        let parseTime = period_status.split(" ");
        let startTime = new Date();
        let time = parseTime[0].split(/\:|\-/g)
        let hours = parseInt(time[0]);

        switch (parseInt(game_status)) {
            case 1:
                if (parseTime[1] === "pm") {
                    hours += 9;
                    startTime.setHours(hours);
                    startTime.setMinutes(time[1]);
                    GameTime = startTime.toLocaleTimeString().substring(0, 5) + " " +
                        startTime.toLocaleTimeString().substring(8, 11);
                }
                else if (parseTime[1] === "am") {
                    hours -= 3;
                    startTime.setHours(hours);
                    startTime.setMinutes(time[1]);
                    GameTime = startTime.toLocaleTimeString().substring(0, 5) + " " +
                        startTime.toLocaleTimeString().substring(8, 11);
                }
                break;
            case 2:
                GameTime = `Live - Q${game.period_time.period_value} ${game.period_time.game_clock}`;
                break;
            case 3:
                GameTime = "Final";
                break;
            default:
                GameTime = "Problem";
        }

        return(
            <td>
                <table style={{width:100+"%"}}>
                    <tbody className="d-flex justify-content-between">
                    <tr>
                        <td>
                            <image src={`${url}/images/${game.home.team_key.toLowerCase()}.png`} className="teamIcon"/>{ game.home.nickname }
                        </td>
                        <td>
                            {game.home.score}
                        </td>
                    </tr>
                    <tr>
                        <td>{GameTime}</td>
                    </tr>
                    <tr>
                        <td>
                            {game.visitor.score}
                        </td>
                        <td>
                            <image src={`${url}/images/${game.visitor.team_key.toLowerCase()}.png`} className="teamIcon"/>{ game.visitor.nickname}
                        </td>
                    </tr>
                    </tbody>
                </table>
            </td>
        );
    }
}