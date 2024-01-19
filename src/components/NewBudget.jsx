import {useState} from 'react'
import Message from './Message'
import { FcDebt } from "react-icons/fc";

const NewBudget = ({
    budget, 
    setBudget, 
    setIsValidBudget
}) => {
    // estado local 
    const [message, setMessage] = useState('')
    // funcion para administrar el budget
    const handleBudgte = (e) =>{
        e.preventDefault() 
        
        if(!budget || budget < 0){
            // modificacion del estado, enviado a Message.jsx como children.
             setMessage("No es un presupuesto valido.")
            // al ejecutar return se deja de ejecutar el resto del codigo.
             return
        } 
        // resetear el estado en caso de que el usuario se haya equivocado
        setMessage('')
        // si es valido el presupuesto modificamos el estado.
        setIsValidBudget(true)
        
    }

  return (
    <div className="contenedor-presupuesto contenedor sombra">
        <form onSubmit={handleBudgte} className="formulario">
            <div className="campo">
                <label>¿Cual es tu presupuesto total?</label>
                <input
                  className="nuevo-presupuesto"
                  type="number" 
                  placeholder="Ingresa tu presupuesto"
                  value={budget}
                  onChange={(e)=>setBudget(Number(e.target.value))}
                  />
                  
            </div>
            <input 
            className='añadir'
              type="submit" 
              value="añadir" 
              />
            {message && <Message tipo="error">{message}</Message>}
            
        </form>
        <h1><FcDebt/></h1>
    </div>
    
  )
}

export default NewBudget