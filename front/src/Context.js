import React, { createContext, useState } from 'react';

export const Context = createContext();

export const Provider = ({ children }) => {

    const [isAuth, setIsAuth] = useState(false);

}

export default {
    Provider,
    Consumer: Context.Consumer
}