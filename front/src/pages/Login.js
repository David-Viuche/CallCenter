import React from 'react';

import { Header } from '../components/Header';
import { UserFormSignIn } from '../components/UserFormSignIn';
import { UserFormSignUp } from '../components/UserFormSignUp';

export const Login = () => {
    return (
        <React.Fragment>
            <Header />
            <UserFormSignIn />
            <UserFormSignUp />
        </React.Fragment>
    )
}