import React, { useContext, useState } from 'react';

import { Button, Container } from './styles';
import { Context } from '../../Context';

export const Llamada = () => {
    let urlencoded = new URLSearchParams();
    const { hacerLlamada } = useContext(Context);
    const [llamada, setLlamada] = useState({});

    const handleClick = async (e) => {
        const id = window.sessionStorage.getItem('id');
        try {
            const data = await fetch(`http://localhost:4000/llamada/nueva/${id}`);
            const dataJson = await data.json();
            console.log(dataJson);
            if (dataJson.estado == "espera") {
                setLlamada(dataJson);
            }
            console.log(dataJson.estado);
        } catch (error) {
            console.log(error);
        }
    }

    const verificarEstado 

    return (
        <React.Fragment>
            <Container>
                {(llamada.estado == "espera") ?
                    <h1>llamada en espera... {llamada.llamadaEspera.id}</h1> :
                    <Button onClick={handleClick}>Hacer Llamada</Button>
                }

            </Container>
        </React.Fragment>
    )
}