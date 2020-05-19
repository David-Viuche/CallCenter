import React from 'react';
import { Router } from '@reach/router';

import { Login } from './pages/Login';
import { User } from './pages/User';
import { NotFound } from './pages/NotFound';

import { GlobalStyle } from './styles/GlobalStyle';

export const App = () => {
    return (
        <React.Fragment>
            <GlobalStyle />
            <Router>
                <NotFound default/>
                <Login path='/'/>
                <User path='/user'/>
            </Router>
        </React.Fragment>
    )
}