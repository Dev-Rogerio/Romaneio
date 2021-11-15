import react from 'react'

export default function Nota (props) {
    return (
        <div>
            {/*<legend>Informe a Nota: {props.num}</legend>*/}
            <input className="a" type="text" name={props.nome} value={props.nota} onChange={(e)=>props.setNota(e)} ></input>
           
        </div>
    )
}