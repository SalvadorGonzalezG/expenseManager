import { useState, useEffect } from 'react'
import Header from './components/Header'
import IconNewExpense from './img/button.png'
import Modal from './components/Modal'
import ExpenseList from './components/ExpenseList'
import { generarId } from './helpers'

function App() {
  // estado para presupuesto inicializado en 0.
  const [budget, setBudget]= useState(0)
  // estado donde el estado inicia como false ya que la primera vez que carga la app comienza como falso el estado.
  const [isValidBudget, setIsValidBudget] = useState(false)
  // estado para una ventana modal colocandp I.S como false para que se muestre hasta dar click.
  const [ modal, setModal ] = useState(false)
  // cuando este en true se agrega una clase para hacer la animacion
  const [animarModal, setAnimarModal] = useState(false)
  // estado de gastos.
  const [gastos, setGastos] = useState([])
  // estado para poder editar el gasto. inicia como un objeto vacio ya que cada gasto es un objeto
  const [editGasto, setEditGasto ] = useState({})
  // escucha los cambios que sucedan en el objeto de editGasto.
  
  useEffect(()=>{
    if(Object.keys(editGasto).length>0){
      // mandamos llamar la funcion para abrir la ventana modal y mandar los datos para que aparezcan y puedan ser editados.
    setModal(true)

    setTimeout(()=>{
      setAnimarModal(true)
    },500);
    }
  },[editGasto])

  const handleNewExpense = () => {
    console.log('Haz abierto la ventana modal')
    setModal(true)
    // funcion para que despues de un segundo muestre el Modal
    setTimeout(()=>{
      setAnimarModal(true)
    }, 1000);
  }

  const guardarGasto = (gasto) =>{
    // si hay un id de un gasto existente, vamos a actualizar 
    if(gasto.id){
    // de otra forma es un nuevo gasto
    const gastosActualization = gastos.map(gastoState => gastoState.id === gasto.id ? gasto : gastoState)
    setGastos(gastosActualization)
    setEditGasto({})
    } else {
      //nuevo gasto
      gasto.id = generarId()
    gasto.date = Date.now() //fecha cuando se generas el nuevo gasto.
    setGastos([...gastos, gasto])
    }

    setAnimarModal(false)
    setTimeout(()=>{
      setModal(false)
    }, 500)
  }
    // Elimar un gasto utilizando el id generado previamente sera pasado al ExpenseList
    const deleteGasto = (id)=>{
      const gastosActualization = gastos.filter( gasto => gasto.id !== id )
      setGastos(gastosActualization)
    }
    
  
  return (
    <>
      <div className={modal ? 'fijar': '' }>
        <Header
        gastos = {gastos}
          budget = {budget}
          setBudget = {setBudget}
          isValidBudget = {isValidBudget}
          setIsValidBudget = {setIsValidBudget}
        />

        {isValidBudget && (
          <>
            <main>
              <ExpenseList
              gastos={gastos}
              setEditGasto={setEditGasto}
              deleteGasto = {deleteGasto}
              />
            </main>

          <div className='nuevo-gasto'>
          <img 
            src={IconNewExpense}
            alt='icono nuevo gasto'
            onClick={handleNewExpense}
          />
        </div>
        </>
        )}

        {modal && <Modal
                  editGasto={editGasto}
                  setModal={setModal}
                  animarModal={animarModal}
                  setAnimarModal={setAnimarModal}
                  guardarGasto={guardarGasto}
                  setEditGasto={setEditGasto}
        />}
      </div>
    </>
  )
}

export default App
