import { useState } from 'react'
import Header from './components/Header'
import IconNewExpense from './img/button.png'
import Modal from './components/Modal'

function App() {
  // estado para presupuesto inicializado en 0.
  const [budget, setBudget]= useState(0)
  // estado donde el estado inicia como false ya que la primera vez que carga la app comienza como falso el estado.
  const [isValidBudget, setIsValidBudget] = useState(false)
  // estado para una ventana modal colocandp I.S como false para que se muestre hasta dar click.
  const [ modal, setModal ] = useState(false)
  // cuando este en true se agrega una clase para hacer la animacion
  const [animarModal, setAnimarModal] = useState(false)

  const handleNewExpense = () => {
    console.log('Haz abierto la ventana modal')
    setModal(true)
    // funcion para que despues de un segundo muestre el Modal
    setTimeout(()=>{
      setAnimarModal(true)
    }, 1000);
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
        {modal && <Modal
                  setModal={setModal}
                  animarModal={animarModal}
                  setAnimarModal={setAnimarModal}
        />}
      </div>
    </>
  )
}

export default App
