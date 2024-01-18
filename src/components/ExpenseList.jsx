import React from 'react'
import Gasto from './Gasto'

        //iteracion de cada uno de los gastos que se van llamado desde la app
const ExpenseList = ({gastos, setEditGasto}) => {
  return (
    <div className='listado-gastos contenedor'>
        <h2>{gastos.length ? 'gastos': 'No hay gastos aun'}</h2>
        {gastos.map(gasto => (
            <Gasto 
            key={gasto.id}
            gasto={gasto}
            setEditGasto={setEditGasto}
            />
        ))}
    </div>
  )
}

export default ExpenseList