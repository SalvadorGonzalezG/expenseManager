import { useState } from 'react'
import Header from './components/Header'

function App() {
  // estado para presupuesto inicializado en 0.
  const [budget, setBudget]= useState(0)

  return (
    <>
      <div>
        <Header
          budget = {budget}
          setBudget = {setBudget}
        />
      </div>
    </>
  )
}

export default App
