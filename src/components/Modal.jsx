import closeWindow from '../img/cancel.png'

const Modal = ({setModal}) => {
    const hideModal = () => {
        console.log('Ocultando la ventana modal.')
        setModal(false)
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
    </div>
  )
}

export default Modal