import react from 'react'

export default function resultado (props) {
    return (
        <div>
            <p className="resultado" >{props.somaNotas}</p>
            <p className="desc">{props.somaNotas <= 300 ? "Metragem de Tecido": "1,70 de tecido"}</p>
            
        </div>
    )
}