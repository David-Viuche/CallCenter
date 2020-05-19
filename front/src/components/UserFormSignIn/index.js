import React from 'react';

import { Input, Button, Form, Div, Tittle, Select, Option } from './styles';

export const UserFormSignIn = () => {

    return (
        <Div>
            <Form>
                <Tittle>Inicia sesión!</Tittle>
                <Input type="email" placeholder="Email"></Input>
                <Input type="password" placeholder="Contraseña"></Input>
                <Select>
                    <Option hidden selected>Escoge tu tipo de usuario!</Option>
                    <Option>Cliente</Option>
                    <Option>Empleado</Option>
                </Select>
                <Button type="submit">Iniciar sesión</Button>
            </Form>
        </Div>
    )

}