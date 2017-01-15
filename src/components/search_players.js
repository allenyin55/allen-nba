import React, { Component } from 'react';
import SearchBar from '../containers/container_search_bar'
import PlayerList from '../containers/container_player_list'
import { Link } from 'react-router';


export default class SearchPlayers extends Component {

    render() {
        return (
            <div>
                <Link to="/" className="btn btn-primary" id="backToIndexBtn">Back to Index</Link>
                <SearchBar />
                <PlayerList />
            </div>
        );
    }
}