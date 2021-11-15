import React, { useState } from 'react';

import Resultado from './resultado'
import Nota from './Nota'

import './Styled.css'

export default function App() {

    const [notas, setNotas] = useState({ "nota1": "0", "nota2": "0", "nota3": "0", "nota4": "0", "nota5": "0", "nota6": "0", "nota7": "0", "nota8": "0" })
    const handleSetNotas = (e) => {
        if (e.target.getAttribute('name') == 'nota1') {
            setNotas({
                "nota1": e.target.value, "nota2": notas.nota2, "nota3": notas.nota3, "nota4": notas.nota4,
                "nota5": notas.nota5, "nota6": notas.nota6, "nota7": notas.nota7, "nota8": notas.nota8
            })

        } else if (e.target.getAttribute('name') == 'nota2') {
            setNotas({
                "nota1": notas.nota1, "nota2": e.target.value, "nota3": notas.nota3, "nota4": notas.nota4,
                "nota5": notas.nota5, "nota6": notas.nota6, "nota7": notas.nota7, "nota8": notas.nota8
            })
        } else if (e.target.getAttribute('name') == 'nota3') {
            setNotas({
                "nota1": notas.nota1, "nota2": notas.nota2, "nota3": e.target.value, "nota4": notas.nota4,
                "nota5": notas.nota5, "nota6": notas.nota6, "nota7": notas.nota7, "nota8": notas.nota8
            })
        } else if (e.target.getAttribute('name') == 'nota4') {
            setNotas({
                "nota1": notas.nota1, "nota2": notas.nota2, "nota3": notas.nota3, "nota4": e.target.value,
                "nota5": notas.nota5, "nota6": notas.nota6, "nota7": notas.nota7, "nota8": notas.nota8
            })
        } else if (e.target.getAttribute('name') == 'nota5') {
            setNotas({
                "nota1": notas.nota1, "nota2": notas.nota2, "nota3": notas.nota3, "nota4": notas.nota4,
                "nota5": e.target.value, "nota6": notas.nota6, "nota7": notas.nota7, "nota8": notas.nota8
            })
        } else if (e.target.getAttribute('name') == 'nota6') {
            setNotas({
                "nota1": notas.nota1, "nota2": notas.nota2, "nota3": notas.nota3, "nota4": notas.nota4,
                "nota5": notas.nota5, "nota6": e.target.value, "nota7": notas.nota7, "nota8": notas.nota8
            })
        } else if (e.target.getAttribute('name') == 'nota7') {
            setNotas({
                "nota1": notas.nota1, "nota2": notas.nota2, "nota3": notas.nota3, "nota4": notas.nota4,
                "nota5": notas.nota5, "nota6": notas.nota6, "nota7": e.target.value, "nota8": notas.nota8
            })
        } else if (e.target.getAttribute('name') == 'nota8') {
            setNotas({
                "nota1": notas.nota1, "nota2": notas.nota2, "nota3": notas.nota3, "nota4": notas.nota4,
                "nota5": notas.nota5, "nota6": notas.nota6, "nota7": notas.nota7, "nota8": e.target.value
            })
        }
    }
    return (
        <>
            <section>
                <div>
                    <div className="divapp">
                        <div className="medidas">Informe suas nedidas</div>
                        <Nota num={1} nome={'nota1'} nota={notas.nota1} setNota={handleSetNotas} />
                        <Nota num={2} nome={'nota2'} nota={notas.nota2} setNota={handleSetNotas} />
                        <Nota num={3} nome={'nota3'} nota={notas.nota3} setNota={handleSetNotas} />
                        <Nota num={4} nome={'nota4'} nota={notas.nota4} setNota={handleSetNotas} />
                        <Nota num={5} nome={'nota5'} nota={notas.nota5} setNota={handleSetNotas} />
                        <Nota num={6} nome={'nota6'} nota={notas.nota6} setNota={handleSetNotas} />
                        <Nota num={7} nome={'nota7'} nota={notas.nota7} setNota={handleSetNotas} />
                        <Nota num={8} nome={'nota8'} nota={notas.nota8} setNota={handleSetNotas} />
                        <button className="button" >Limpar</button>
                    </div>


                    <Resultado className="resultado" somaNotas={parseFloat(notas.nota1) + parseFloat(notas.nota2) + parseFloat(notas.nota3) + parseFloat(notas.nota4)
                        + parseFloat(notas.nota5) + parseFloat(notas.nota6) + parseFloat(notas.nota7) + parseFloat(notas.nota8)} />
                    <form>
                        <table border='1' style={{ borderCollapse: 'collapse' }}>
                            <thead>
                                <tr>
                                    <th className='colar'>
                                        Colarinho
                                    </th>
                                    <th className='pala'>
                                        Pala
                                    </th>
                                    <th className='manga'>
                                        Manga
                                    </th>
                                    <th className='torax'>
                                        Tórax
                                    </th>
                                    <th className='cintura'>
                                        Cintura
                                    </th>
                                    <th className='quadril'>
                                        Quadril
                                    </th>
                                    <th className='compr'>
                                        Compri.
                                    </th>
                                    <th className='punho'>
                                        Punho
                                    </th>
                                </tr>
                            </thead>
                        </table>
                    </form>
                </div>
            </section>
        </>
    )
}

