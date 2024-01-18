import {useEffect, useState} from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const ControlBudget = ({budget, gastos}) => {

    const [porcentaje, setPorcentaje] = useState(0)
    const [disponible, setDisponible] = useState(0)

    const [gastado, setGastado] = useState(0)
    

    // cada vez que gastos cambie este effect se va a estar renderizando.
    useEffect(()=>{
        // .reduce ya que inicializamos el estado con un array vacio.
        const totalGastado = gastos.reduce((total, gasto)=>
             gasto.cantidad + total, 0)
        const totalDisponible = budget - totalGastado
        // calcular el porcentaje gastado.
        const newPorcentaje = (((budget-totalDisponible) / budget) * 100).toFixed(2);

        
        setDisponible(totalDisponible)
        setGastado(totalGastado)
        setTimeout(()=>{
            setPorcentaje(newPorcentaje)
        },1000)
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
            <CircularProgressbar 
            value={porcentaje}
            styles={buildStyles({
                pathColor: '#756aff',
                trailColor: '#f2f1ff',
                textColor: '#030056'
            })}
            text={`Gastaste ${porcentaje}%`}
            
            />
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