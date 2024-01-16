import React from 'react'
import NewBudget from './NewBudget'

    // extraemos el prop de app.jsx
const Header = ({budget, setBudget}) => {

    

  return (
    <header>
        <h1>Control de gastos</h1>
        
        <NewBudget
          budget = {budget}
          setBudget = {setBudget}
        />
    </header>
    
  )
}

export default Header