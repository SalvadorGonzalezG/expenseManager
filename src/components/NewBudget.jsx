
const NewBudget = ({budget, setBudget}) => {

    // funcion para administrar el budget
    const handleBudgte = (e) =>{
        e.preventDefault() 
        
        if(!Number(budget) || Number(budget) > 0){
             console.log("No es un presupuesto valido")
        } else {
            console.log(Number(budget))
        }
    }

  return (
    <div className="contenedor-presupuesto contenedor sombra">
        <form onSubmit={handleBudgte} className="formulario">
            <div className="campo">
                <label>Presupuesto total:</label>
                <input
                  className="nuevo-presupuesto"
                  type="text" 
                  placeholder="Ingresa tu presupuesto"
                  value={budget}
                  onChange={(e)=>setBudget(e.target.value)}
                  />
                  
            </div>
            <input type="submit" value="añadir" />
        </form>
        
    </div>
  )
}

export default NewBudget