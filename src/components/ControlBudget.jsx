
const ControlBudget = ({budget}) => {

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
                <span>Disponible: </span> {currencyFormat(0)}
            </p>
            <p>
                <span>Gastado: </span> {currencyFormat(0)}
            </p>
        </div>

    </div>
  )
}

export default ControlBudget