import React, { Component } from 'react';
import { Link } from 'react-router';
import Standings from '../containers/container_standings'
import Games from '../containers/container_games'

export default class MyIndex extends Component{
    render(){

        const style = {
            width: 50+"%",
            padding: 15+"px"
        };

        return(
            <div>
                <h2 style={{marginTop:25+'px'}}>Allen's NBA Front Page</h2>
                <div className="text-sm-right">
                    <Link to="/searchplayers" className="btn btn-primary">Search Players</Link>
                </div>
                <div className="d-flex flex-row">
                    <div style={style}>
                        <h4>Standings</h4>
                        <Standings/>
                    </div>
                    <div style={style}>
                        <h4>Games Today</h4>
                        <Games/>
                    </div>
                </div>
            </div>
        )
    }
}