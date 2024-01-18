import closeWindow from '../img/cancel.png'
import Message from './Message'
import {useState, useEffect} from 'react'

const Modal = ({setModal, animarModal, setAnimarModal, guardarGasto, editGasto}) => {
        // nombre, cantidad, categoria de los gastos.
    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState(0)
    const [categoria, setCategoria] = useState('')
    const [ message, setMessage ] = useState('')
    //:f que se ejecuta cuando el componente este listo ya que modal no es fijo.
    useEffect(()=>{
        if(Object.keys(editGasto).length > 0){
            setNombre(editGasto.nombre)
            setCantidad(editGasto.cantidad)
            setCategoria(editGasto.categoria)
        }
    },[])

    const hideModal = () => {
        console.log('Ocultando la ventana modal.')
        
        setAnimarModal(false)

        setTimeout(()=>{
            setModal(false)
        },500)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if([ nombre, cantidad, categoria].includes('')){
            setMessage('Todos los campos son obligatorios ')
            // setTimeout que dure 3 segundos y quite la alerta
            setTimeout(()=>{
                setMessage('')
            }, 2000)
            return;
        }
        // pasamos el estado con el valor de cada uno de los campos
        guardarGasto({nombre, cantidad, categoria})
    }

  return (
    <div className="modal">
        <div className="cerrar-modal">
            <img 
              src={closeWindow} 
              alt="close Modal" 
              onClick={hideModal}
            />
        </div>
        <form 
        onSubmit={handleSubmit}
        className={`formulario ${animarModal ? "animar": 'cerrar' }`}>
            
            <legend>Nuevo Gasto.</legend>
            {message && <Message tipo='error'>{message}</Message>}
                      

            <div className='campo'>
                <label htmlFor="nombre">Nombre del Gasto.</label>

                <input 
                  id='nombre'
                  type="text"
                  placeholder='Añade el nombre de tu gasto'
                  value={nombre}
                  onChange={ (e) =>setNombre(e.target.value)}
                  />
            </div>

            <div className='campo'>
                <label htmlFor="cantidad">Cantidad:</label>

                <input 
                  id='cantidad'
                  type="number"
                  placeholder='Cantidad total del gasto.'
                  value={cantidad}
                  onChange={(e)=> setCantidad(Number(e.target.value))}
                  />
            </div>

            <div className='campo'>
                <label htmlFor="categoria">Categoria.</label>

                <select 
                id="categoria"
                value={categoria}
                onChange={(e)=>{setCategoria(e.target.value)}}
                >
                  <option value="">-- Selecciona --</option>
                  <option value="salud">Salud.</option>
                  <option value="alimentos">Alimentos.</option>
                  <option value="mascotas">Mascotas.</option>
                  <option value="trasporte">Transporte.</option>
                  <option value="subscipciones">Subscripciones.</option>
                  <option value="otros">Otros Gastos</option>
                </select>
            </div>
            <input type="submit" value="añadir gasto." />
        </form>

    </div>
  )
}

export default Modal