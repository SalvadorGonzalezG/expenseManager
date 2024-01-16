import { useState } from 'react'
import Header from './components/Header'

function App() {
  // estado para presupuesto inicializado en 0.
  const [budget, setBudget]= useState(0)
  // estado donde el estado inicia como false ya que la primera vez que carga la app comienza como falso el estado.
  const [isValidBudget, setIsValidBudget] = useState(false)

  return (
    <>
      <div>
        <Header
          budget = {budget}
          setBudget = {setBudget}
          isValidBudget = {isValidBudget}
          setIsValidBudget = {setIsValidBudget}
        />
      </div>
    </>
  )
}

export default App
