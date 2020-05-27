import React, { createContext, useState } from 'react';

export const Context = createContext();

const Provider = ({ children }) => {

    const [isAuth, setIsAuth] = useState(() => {
        return window.sessionStorage.getItem('id');
    });

    const value = {
        isAuth,
        activateAuth: (id) => {
            setIsAuth(true);
            window.sessionStorage.setItem('id', id);
        },
        removeAuth: async (id) => {
            setIsAuth(false);
            window.sessionStorage.removeItem('id');
            await fetch(`http://localhost:4000/usuario/desactivar/${id}`);
        }
    }

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}

export default {
    Provider,
    Consumer: Context.Consumer
}