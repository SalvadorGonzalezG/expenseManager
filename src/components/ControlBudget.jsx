import {useEffect, useState} from 'react'

const ControlBudget = ({budget, gastos}) => {

    const [disponible, setDisponible] = useState(0)

    const [gastado, setGastado] = useState(0)
    

    // cada vez que gastos cambie este effect se va a estar renderizando.
    useEffect(()=>{
        // .reduce ya que inicializamos el estado con un array vacio.
        const totalGastado = gastos.reduce((total, gasto)=>
             gasto.cantidad + total, 0)
        const totalDisponible = budget - totalGastado
        
        setDisponible(totalDisponible)
        setGastado(totalGastado)
    },[gastos])

    //formato de la cantidad que se ingresa. "No muta el estado original"
    const currencyFormat = (cantidad) =>{

        return cantidad.toLocaleString('en-US',{
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
                <span>Presupuesto: </span> {currencyFormat(budget)}
            </p>
            <p>
                <span>Disponible: </span> {currencyFormat(disponible)}
            </p>
            <p>
                <span>Gastado: </span> {currencyFormat(gastado)}
            </p>
        </div>

    </div>
  )
}

export default ControlBudget