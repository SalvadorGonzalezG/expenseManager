import {useState} from 'react'
import Message from './Message'

const NewBudget = ({budget, setBudget}) => {
    // estado local 
    const [message, setMessage] = useState('')
    // funcion para administrar el budget
    const handleBudgte = (e) =>{
        e.preventDefault() 
        
        if(!budget || budget < 0){
             setMessage("No es un presupuesto valido.")

             return
        } 
        // resetear el estado en caso de que el usuario se haya equivocado
        setMessage('')
        console.log(budget)
    }

  return (
    <div className="contenedor-presupuesto contenedor sombra">
        <form onSubmit={handleBudgte} className="formulario">
            <div className="campo">
                <label>Presupuesto total:</label>
                <input
                  className="nuevo-presupuesto"
                  type="number" 
                  placeholder="Ingresa tu presupuesto"
                  value={budget}
                  onChange={(e)=>setBudget(Number(e.target.value))}
                  />
                  
            </div>
            <input 
              type="submit" 
              value="añadir" 
              />
            {message && <Message tipo="error">{message}</Message>}
        </form>
        
    </div>
  )
}

export default NewBudget