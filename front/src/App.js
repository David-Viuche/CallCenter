import React, { useContext } from 'react';
import { Router, Redirect } from '@reach/router';

import { Login } from './pages/Login';
import { User } from './pages/User';
import { NotFound } from './pages/NotFound';
import { Context } from './Context';

import { GlobalStyle } from './styles/GlobalStyle';

export const App = () => {

    const { isAuth } = useContext(Context);

    return (
        <React.Fragment>
            <GlobalStyle />
            <Router>
                <NotFound default/>
                {!isAuth && <Redirect noThrow from='/user' to='/' />}
                {isAuth && <Redirect noThrow from='/' to='/user' />}
                <Login path='/'/>
                <User path='/user'/>
            </Router>
        </React.Fragment>
    )
}