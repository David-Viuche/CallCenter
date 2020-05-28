import React from 'react';
import ReactDOM from 'react-dom';
import Context from './Context';

import { App } from './App';

const container = document.getElementById('app');

ReactDOM.render(
    <Context.Provider>
        <App />
    </Context.Provider>, 
    container);