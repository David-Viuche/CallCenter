import React from 'react';

import { Login } from './pages/Login';
import { Layout } from './components/Layout';

export const App = () => {
    return (
        <React.Fragment>
            <Layout />
            <Login />
        </React.Fragment>
    )
}