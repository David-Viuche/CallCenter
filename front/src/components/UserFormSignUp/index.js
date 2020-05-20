import React from 'react';
import { useInputValue } from '../../hooks/useInputValue';
import { Input, Button, Form, Div, Tittle, ContainerInfo, ContainerForm } from './styles';

export const UserFormSignUp = () => {

    const correo = useInputValue('');
    const contraseña = useInputValue('');
    const nombre = useInputValue('');

    return (
        <Div>
            <Form>
                <ContainerInfo >
                    <Tittle>Unete a la mejor red de Call Center!</Tittle>
                </ContainerInfo>

                <ContainerForm>
                    <Input type="email" placeholder="Email" {...correo}></Input>
                    <Input type="password" placeholder="Contraseña" {...contraseña}></Input>
                    <Input type="text" placeholder="Nombre" {...nombre}></Input>
                    <Button type="submit">Registrarse</Button>
                </ContainerForm>
            </Form>
        </Div>
    )

}