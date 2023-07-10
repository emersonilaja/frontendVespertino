import React, { useEffect, useState} from "react";
import { Link } from "react-router-dom"
const PerfilPag = () => {

  // contadorLikes
  const [contadorLikes,setContadorLikes] = useState(0)
  //const [nombre,setNombre] = useState("")
  //const [activo,setActivo] = useState(false)
  //Cómo se lee un estado? console.log(contadorLikes)
  //Cómo se cambia el valor de un estado? setContadorLikes(12)
  const handleContador = () => {
    setContadorLikes(contadorLikes+1)
  }
  return (
    <>
        <h1>Página de Perfil</h1>
        <p> Hasta Pronto</p>
        <div>
          <Link to="/">Ir a Inicio</Link>
        </div><br/>
        <button type="button" onClick={handleContador}> Dar Like</button>
        <p>Conteo de Likes: {contadorLikes}</p>
    </>
  )
}

export default PerfilPag;