import React from 'react';

import { Input, Button, Form, Div, Tittle } from './styles';

export const UserFormSignIn = () => {

    return (
        <Div>
            <Form>
                <Tittle>Sign in</Tittle>
                <Input type="email" placeholder="Email"></Input>
                <Input type="text" placeholder="Name"></Input>
                <Input type="password" placeholder="Password"></Input>
                <Button>Sign in</Button>
            </Form>
        </Div>
    )

}