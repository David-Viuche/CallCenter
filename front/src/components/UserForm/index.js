import React from 'react';

import { Input, Button, Form, Div, Tittle } from './styles';

export const UserForm = () => {

    return (
        <Div>
            <Form>
                <Tittle>Sign in</Tittle>
                <p>lorem</p>
                <Input placeholder="Email"></Input>
                <Input placeholder="Password"></Input>
                <Button>Sign in</Button>
            </Form>
        </Div>
    )

}