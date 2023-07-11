import React, {useEffect, useState} from "react";

const Usuario = () => {
    const [nameUser,setNameUser] = useState("")
    const [terminoContr, setTerminoContr] = useState(false)

    const handleUser = (evento) =>{
        //Dónde está en el evento lo que viene escrito?
        //Por el usuario desde el input de texto?
        // evento.target.value
        setNameUser(evento.target.value)
    }

    const handleTerminos = ()=>{
        setTerminoContr(!terminoContr)
    }
    return (
        <>
            <h1>Usuario</h1>
            <label>Indique un nombre de usuario</label><br/>
            <input type="text" name="usuario" placeholder="Por ejemplo : Santiago" onChange={handleUser}/><br/><br/>
            { nameUser == "nombreError" &&
                <p>YA EXISTE ESE USUARIO</p>
            }<br/>
            <input type="checkbox" name="terminos" checked={terminoContr} onChange={handleTerminos}/>
            <label htmlFor="terminos">Acepto los términos de contrato</label><br/><br/>
            <button type="button">Guardar nombre de usuario</button>
        </>
    )
}
export default Usuario