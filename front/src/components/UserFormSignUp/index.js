import React from 'react';

import { Input, Button, Form, Div, Tittle, ContainerInfo, ContainerForm } from './styles';

export const UserFormSignUp = () => {

    return (
        <Div>
            <Form>
                <ContainerInfo >
                    <Tittle>Unete a la mejor red de Call Center!</Tittle>
                </ContainerInfo>

                <ContainerForm>
                    <Input type="email" placeholder="Email"></Input>
                    <Input type="password" placeholder="Contraseña"></Input>
                    <Input type="text" placeholder="Nombre"></Input>
                    <Button type="submit">Registrarse</Button>
                </ContainerForm>
            </Form>
        </Div>
    )

}