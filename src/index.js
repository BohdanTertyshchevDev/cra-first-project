import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import Greeting from './components/Greeting/Greeting';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.Fragment>
        <Greeting name="Bohdan" />
        <Greeting name="Misha" />
        <Greeting name="Petya" />
        <App />
    </React.Fragment>
    
);

