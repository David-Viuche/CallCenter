import React from 'react';

import { UserFormSignIn } from '../components/UserFormSignIn';
import { UserFormSignUp } from '../components/UserFormSignUp';

export const Login = () => {
    return (
        <React.Fragment>
            <UserFormSignIn />
            <UserFormSignUp />
        </React.Fragment>
    )
}