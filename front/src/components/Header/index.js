import React from 'react';

import { Logo } from '../Logo';
import { Nav, Line } from './styles';

export const Header = () => {
    return (
        <React.Fragment>
            <Nav>
                <Logo />
            </Nav>
            <Line />
        </React.Fragment>
    )
}