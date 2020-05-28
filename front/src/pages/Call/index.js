import React, { useEffect, useState } from 'react'
import { Link } from '@reach/router';
import { Principal, SideBar, Footer, Button } from './styles';
import { FaPhoneSlash } from "react-icons/fa";

export const Call = () => {

    const [llamada, setLlamada] = useState({});

    useEffect(() => {

        const id = window.sessionStorage.getItem('id');

        const handleLlamada = async () => {
            try {
                const data = await fetch(`http://localhost:4000/llamada/nueva/${id}`);
                const dataJson = await data.json();
                console.log(dataJson);
                setLlamada(dataJson);
            } catch (error) {
                console.log(error);
            }
        }

        handleLlamada();
            
    }, [])

    return (
        <React.Fragment>
            <Principal>
                {
                    llamada.estado == 'espera' 
                        ? <h1>Llamada en espera</h1>
                        : <h1>Llamada activa</h1>
                }
            </Principal>

            <SideBar>
                <h1>Sidebar</h1>
            </SideBar>

            <Footer>
                <Link to="/user">
                    <Button>
                        <FaPhoneSlash size="2em"/>
                    </Button>
                </Link>
            </Footer>
        </React.Fragment>
    )
}
