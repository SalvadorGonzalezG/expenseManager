import closeWindow from '../img/cancel.png'

const Modal = ({setModal, animarModal, setAnimarModal}) => {
    const hideModal = () => {
        console.log('Ocultando la ventana modal.')
        
        setAnimarModal(false)

        setTimeout(()=>{
            setModal(false)
        },500)
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
        <form className={`formulario ${animarModal ? "animar": 'cerrar' }`}>
            <legend>Nuego Gasto.</legend>
        </form>

    </div>
  )
}

export default Modal