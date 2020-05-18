import React from 'react';
import { Router } from '@reach/router';

import { Login } from './pages/Login';
import { NotFound } from './pages/NotFound';

import { GlobalStyle } from './styles/GlobalStyle';

export const App = () => {
    return (
        <React.Fragment>
            <GlobalStyle />
            <Router>
                <NotFound default/>
                <Login path='/'/>
            </Router>
        </React.Fragment>
    )
}