import React, { useEffect, useState} from "react";
import { Link } from "react-router-dom"
const InicioPag = () => {
  return (
      <>
        <h1>Página de Inicio</h1>
        <p> Bienvenidos</p><br/>
        <div>
          <a href="/perfil">Ir a Perfil</a><br/>
          <Link to="/perfil">Ir a Perfil</Link>
        </div>
      </>
    
  )
}

export default InicioPag;