import React from 'react';

import { Login } from './pages/Login';
import { Layout } from './components/Layout';

import { GlobalStyle } from './styles/GlobalStyle';

export const App = () => {
    return (
        <React.Fragment>
            <GlobalStyle />
            <Layout />
            <Login />
        </React.Fragment>
    )
}