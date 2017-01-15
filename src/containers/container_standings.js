import React from "react";
import { connect } from 'react-redux';
import { fetchStandings } from '../actions/index';
import teamMap from '../utils/team_map';
import RenderConference from '../components/conference_standings';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class Standings extends React.Component{

    constructor (props) {
        super(props);

        let teamMapById = {};
        for (let key in teamMap) {
            teamMapById[teamMap[key].id] = Object.assign({}, teamMap[key], {abbr: key})
        }
        this.teamMapById = teamMapById;
    }

    componentWillMount(){
        this.props.fetchStandings();
    }

    renderStandings(){
        let western = [];
        let eastern = [];
        this.props.standings.standings.map((data) =>{
            if(this.teamMapById[data.id].conf === 'western') western.push(data);
            else if (this.teamMapById[data.id].conf === 'eastern') eastern.push(data);
        });

        return(
            <ul>
                <Tabs
                    selectedIndex={0}
                >
                    <TabList>
                        <Tab>Western</Tab>
                        <Tab>Eastern</Tab>
                    </TabList>

                    <TabPanel>
                        <RenderConference className="p-2" teamData={western} getTeamById={this.teamMapById}/>
                    </TabPanel>
                    <TabPanel>
                        <RenderConference className="p-2" teamData={eastern} getTeamById={this.teamMapById}/>
                    </TabPanel>
                </Tabs>
            </ul>

        );
    }

    render(){
        if (!this.props.standings){
            return (
                <div>
                    <h3>Loading...</h3>
                </div>
            )
        }

        return(
            <div>
                { this.renderStandings() }
            </div>
        )
    }

}

function mapStateToProps( {standings} ) {
    return { standings };
}


export default connect (mapStateToProps, {fetchStandings})(Standings);