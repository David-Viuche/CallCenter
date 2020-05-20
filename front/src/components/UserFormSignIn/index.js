import React from 'react';
import { useInputValue } from '../../hooks/useInputValue';
import { Input, Button, Form, Div, Tittle, Select, Option } from './styles';

export const UserFormSignIn = () => {

    const correo = useInputValue('');
    const contraseña = useInputValue('');
    const tipo = useInputValue('');

    let urlencoded = new URLSearchParams();
    urlencoded.append("correo", correo.value);
    urlencoded.append("contraseña", contraseña.value);
    urlencoded.append("tipo", tipo.value);

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const res = await fetch('http://localhost:4000/sesion/signin', {
                mode: 'cors',
                method: "POST",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: urlencoded
            })

            console.log(res);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <Div>
            <Form onSubmit={handleSubmit}>
                <Tittle>Inicia sesión!</Tittle>
                <Input type="email" placeholder="Correo" {...correo}></Input>
                <Input type="password" placeholder="Contraseña" {...contraseña}></Input>
                <Select value="0" {...tipo} >
                    <Option value="0" hidden>Escoge tu tipo de usuario!</Option>
                    <Option>usuario</Option>
                    <Option>empleado</Option>
                </Select>
                <Button type="submit">Iniciar sesión</Button>
            </Form>
        </Div>
    )

}