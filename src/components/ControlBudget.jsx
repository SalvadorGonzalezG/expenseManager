import React from 'react'

const ControlBudget = ({budget}) => {

    //formato de la cantidad que se ingresa.
    const currencyFormat = (cantidad) =>{

        return cantidad.toLocalString('en-US',{
            style: 'currency',
            currency: 'USD'
        })
    }

  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        <div >
            <p>Grafica aqui.</p>
        </div>
        <div className='contenido-presupuesto'>
            <p>
                <span>Presupuesto: </span> ${budget}
            </p>
        </div>

    </div>
  )
}

export default ControlBudget