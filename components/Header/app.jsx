import React, { useState } from 'react'

import './styled.css';



export default function App() {

    const [cad, setCad] = useState('')

    const msglogin = () => {
        return 'Boa Noite'
    }

    const msglogoff = () => {
        return 'Prezado Cliente'
    }
    const msglogo = () => {
        return ' é um Prazer Receber Você.'
    }
    const msgvazio = () => {
        return ''
    }

    return (
        <>
            <div className='containerfirst'>
                <label className='cadCli'>Informe seu nome aqui:</label>
                <input className='cadCli_box' type='text' size='37' maxLength='40' placeholder='Nome' value={cad} onChange={(e) => { setCad(e.target.value) }}></input>

                <p className="res_name"> {cad ? msglogoff() : msglogin()} {cad}{cad ? msglogo() : msgvazio()}</p>

            </div>
        </>
    )
}