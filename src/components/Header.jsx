import React from 'react'
import NewBudget from './NewBudget'
import ControlBudget from './ControlBudget'

    // extraemos el prop de app.jsx
const Header = ({
    setGastos,
    gastos,
    budget,
    setBudget, 
    isValidBudget, 
    setIsValidBudget // Header si requiere el modificador del prop de la validacion.
}) => {



  return (
    <header>
        <h1>Control de gastos</h1>
        
        {isValidBudget ? (
            < ControlBudget
              gastos={gastos}
              budget={budget}
              setGastos={setGastos}
              setBudget={setBudget}
              setIsValidBudget={setIsValidBudget}
            />
        ): (
            <NewBudget
          budget = {budget}
          setBudget = {setBudget}
          setIsValidBudget = {setIsValidBudget}
        />
        )}
        
    </header>
    
  )
}

export default Header