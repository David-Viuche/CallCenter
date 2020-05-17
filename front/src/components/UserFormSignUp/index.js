import React from 'react';

import { Input, Button, Form, Div, Tittle, ContainerInfo, ContainerForm } from './styles';

export const UserFormSignUp = () => {

    return (
        <Div>
            <Form>
                <ContainerInfo >
                    <Tittle>Join our club</Tittle>
                    <p>lorem</p>
                </ContainerInfo>

                <ContainerForm>
                    <Input placeholder="Email"></Input>
                    <Input placeholder="Password"></Input>
                    <Button>Sign up</Button>
                </ContainerForm>
            </Form>
        </Div>
    )

}