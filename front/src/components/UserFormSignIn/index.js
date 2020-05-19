import React from 'react';
import { useInputValue } from '../../hooks/useInputValue';
import { Input, Button, Form, Div, Tittle, Select, Option } from './styles';

export const UserFormSignIn = () => {

    const data = {
        email: useInputValue(''),
        password: useInputValue(''),
        userType: useInputValue('')
    }

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const res = await fetch('http://localhost:4000/sesion/signin', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: JSON.stringify(data)
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
                <Input type="email" placeholder="Email" {...data.email}></Input>
                <Input type="password" placeholder="Contraseña" {...data.password}></Input>
                <Select value="0" {...data.userType} >
                    <Option value="0" hidden>Escoge tu tipo de usuario!</Option>
                    <Option>usuario</Option>
                    <Option>empleado</Option>
                </Select>
                <Button type="submit">Iniciar sesión</Button>
            </Form>
        </Div>
    )

}