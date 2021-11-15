import React from 'react'

import Header from './components/Header/app.jsx';
import Main from './components/Main/app.jsx';
import App2 from './components/Footer/app2';


import './index.css';


export default function App () {
    return (
        <>
        <p className='Deus_Fiel'>Deus é Fiél</p>
        <Header />
        <Main />
        <App2 />
        
        </>
    );
}