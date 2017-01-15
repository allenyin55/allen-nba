import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPlayer, fetchStat } from '../actions/index';

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

        let term = {
            name: this.state.term
        };

        this.props.fetchPlayer(term);
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
                    <button type="submit" className="btn btn-primary">Submit</button>
                </span>
            </form>
        )
    }
}

function mapStateToProps({player}) {
    return {player};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators ( {fetchPlayer, fetchStat }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);