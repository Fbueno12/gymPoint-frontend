import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Students from '../pages/Students';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/alunos" exact component={Students} />
        </Switch>
    );
}
