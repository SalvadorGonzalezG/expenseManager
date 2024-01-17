import closeWindow from '../img/cancel.png'
import {useState} from 'react'

const Modal = ({setModal, animarModal, setAnimarModal}) => {

    const [nombre, setNombre] = useState('')

    const hideModal = () => {
        console.log('Ocultando la ventana modal.')
        
        setAnimarModal(false)

        setTimeout(()=>{
            setModal(false)
        },500)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if([nombre, cantidad, categoria].includes('')){
            console.log("fallo la validacion")
            return;
        }
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

            <div className='campo'>
                <label htmlFor="nombre">Nombre del Gasto.</label>

                <input 
                  id='nombre'
                  type="text"
                  placeholder='Añade el nombre de tu gasto'
                  value={nombre}
                  onChange={ e =>setNombre(e.target.value)}
                  />
            </div>

            <div className='campo'>
                <label htmlFor="cantidad">Cantidad:</label>

                <input 
                  id='cantidad'
                  type="number"
                  placeholder='Cantidad total del gasto.'
                  />
            </div>

            <div className='campo'>
                <label htmlFor="categoria">Categoria.</label>

                <select id="categoria">
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