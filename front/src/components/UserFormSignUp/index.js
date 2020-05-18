import React from 'react';

import { Input, Button, Form, Div, Tittle, ContainerInfo, ContainerForm } from './styles';

export const UserFormSignUp = () => {

    return (
        <Div>
            <Form>
                <ContainerInfo >
                    <Tittle>Join our club</Tittle>
                </ContainerInfo>

                <ContainerForm>
                    <Input type="email" placeholder="Email"></Input>
                    <Input type="password" placeholder="Password"></Input>
                    <Button>Sign up</Button>
                </ContainerForm>
            </Form>
        </Div>
    )

}