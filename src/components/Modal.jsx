import closeWindow from '../img/cancel.png'

const Modal = () => {
  return (
    <div className="modal">
        <div className="cerrar-modal">
            <img 
              src={closeWindow} 
              alt="close Modal" 
            />
        </div>
    </div>
  )
}

export default Modal