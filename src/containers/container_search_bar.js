import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPlayer, fetchStat } from '../actions/index';
import players from '!json!../../data/players.json';
import jsonQuery from 'json-query';

class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = {term: ''};

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event){
        this.setState({term: event.target.value});
    }

    onFormSubmit(event){
        event.preventDefault();

        const data = {
            people: players
        };

        let personId = jsonQuery(`people[name=${this.state.term}].personId`, {
            data: data
        }).value;

        this.props.fetchPlayer(personId);
        this.setState({term: ''})
    }

    render(){
        return(
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                    placeholder="Search for a player"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators ( {fetchPlayer, fetchStat}, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar);