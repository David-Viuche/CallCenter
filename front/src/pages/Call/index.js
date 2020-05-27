import React, { useEffect } from 'react'
import { Link } from '@reach/router';
import { Principal, SideBar, Footer, Button } from './styles';
import { FaPhoneSlash } from "react-icons/fa";

export const Call = () => {

    return (
        <React.Fragment>
            <Principal>
                <h1>Principal</h1>
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
