import React from 'react';
import { useInputValue } from '../../hooks/useInputValue';
import { Input, Button, Form, Div, Tittle, Select, Option } from './styles';

export const UserFormSignIn = () => {

    const email = useInputValue('');
    const password = useInputValue('');
    const userType = useInputValue('');

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const res = await fetch('', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: {email, password, userType}
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
                <Input type="email" placeholder="Email" {...email}></Input>
                <Input type="password" placeholder="Contraseña" {...password}></Input>
                <Select value="0" {...userType} >
                    <Option value="0" hidden>Escoge tu tipo de usuario!</Option>
                    <Option>Usuario</Option>
                    <Option>Empleado</Option>
                </Select>
                <Button type="submit">Iniciar sesión</Button>
            </Form>
        </Div>
    )

}