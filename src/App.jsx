import { useState } from 'react'
import Header from './components/Header'
import IconNewExpense from './img/nuevo-gasto.svg'

function App() {
  // estado para presupuesto inicializado en 0.
  const [budget, setBudget]= useState(0)
  // estado donde el estado inicia como false ya que la primera vez que carga la app comienza como falso el estado.
  const [isValidBudget, setIsValidBudget] = useState(false)

  const handleNewExpense = () => {
    console.log('Diste clic para añadir nuevo gasto')
  }
  return (
    <>
      <div>
        <Header
          budget = {budget}
          setBudget = {setBudget}
          isValidBudget = {isValidBudget}
          setIsValidBudget = {setIsValidBudget}
        />

        {isValidBudget && (
          <div className='nuevo-gasto'>
          <img 
            src={IconNewExpense}
            alt='icono nuevo gasto'
            onClick={handleNewExpense}
          />
        </div>
        )}
        
      </div>
    </>
  )
}

export default App
