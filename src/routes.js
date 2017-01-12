import React from 'react';
import { Route, IndexRoute } from 'react-router';

import SearchPlayers from './components/search_players';
import MyIndex from './components/my_index';

export default (
    <Route path="/">
        <IndexRoute component={MyIndex}/>
        <Route path="searchPlayers" component={SearchPlayers}/>
    </Route>
)