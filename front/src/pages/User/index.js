import React from 'react'; 
import { Link } from '@reach/router';

import { Header } from '../../components/Header';

import { Div, Button, Tittle } from './styles';

export const User = () => {

    return (
        <React.Fragment>
            <Header />
            <Div>
                <Tittle>Bienvenido de nuevo!!</Tittle>
            </Div>

            <Div>
                <Tittle>Realiza tu llamada!</Tittle>
                <p>Las mejores llamadas en tiempo real a tu disposición, para empezar da click en el botón, serás redireccionado a una vista donde entraras directamente a una llamada con uno de nuestros operadores o serás puesto en cola.</p>
                <Link to='/call'>
                    <Button>Dame Click :D</Button>
                </Link>
            </Div>
        </React.Fragment>
    )
} 