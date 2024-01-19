import React from 'react'
import Gasto from './Gasto'

//iteracion de cada uno de los gastos que se van llamado desde la app
const ExpenseList = ({ gastos, setEditGasto, deleteGasto, gastosFilter, filter }) => {
  return (
    <div className='listado-gastos contenedor'>

      {filter ? (
          <>
            <h2>{gastos.length ? 'gastos' : 'No hay gastos aun'}</h2>

            {gastosFilter.map(gasto => (
            <Gasto
              key={gasto.id}
              gasto={gasto}
              setEditGasto={setEditGasto}
              deleteGasto={deleteGasto}
            />
            ))}
          </>
        ) : (
          <>
          <h2>{gastos.length ? 'gastos' : 'No hay gastos en la categoria'}</h2>
          {gastos.map(gasto => (
            <Gasto
              key={gasto.id}
              gasto={gasto}
              setEditGasto={setEditGasto}
              deleteGasto={deleteGasto}
            />
          ))}
          </>
        )
      }
    </div>
  )
}

export default ExpenseList