import React from 'react';
import { useInputValue } from '../../hooks/useInputValue';
import { Input, Button, Form, Div, Tittle, ContainerInfo, ContainerForm } from './styles';

export const UserFormSignUp = () => {

    const correo = useInputValue('');
    const contraseña = useInputValue('');
    const nombre = useInputValue('');

    let urlencoded = new URLSearchParams();
    urlencoded.append("correo", correo.value);
    urlencoded.append("contraseña", contraseña.value);
    urlencoded.append("nombre", nombre.value);

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const res = await fetch('http://localhost:4000/sesion/signup', {
                mode: 'cors',
                method: "POST",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: urlencoded
            })

            const status = await res.json();
            console.log(status);

        } catch (err) {
            console.log(err);
        }
    }

    return (
        <Div>
            <Form onSubmit={handleSubmit}>
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