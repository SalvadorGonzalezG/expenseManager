import React from 'react'
import NewBudget from './NewBudget'
import ControlBudget from './ControlBudget'

    // extraemos el prop de app.jsx
const Header = ({
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
              budget={budget}
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