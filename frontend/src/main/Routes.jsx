import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

import Home from '../components/home/Home';
import UserComponent from '../components/user/UserComponent';

export default props =>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/users' component={UserComponent} />
        <Redirect from='*' to='/' />
    </Switch>