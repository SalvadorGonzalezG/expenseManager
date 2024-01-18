import React from 'react'
import { formatDate } from '../helpers';
import { LeadingActions, SwipeableList, SwipeableListItem, SwipeAction, TrailingActions } from 'react-swipeable-list'
// hoja de estilos de la libreria 
import 'react-swipeable-list/dist/styles.css'
import healt from '../img/heart.png'
import eat from '../img/food.png'
import pets from '../img/vet.png'
import train from '../img/train.png'
import subsciptions from '../img/subscribe.png'
import other from '../img/application.png'
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";


const dictionaryIcons = {
    salud: healt,
    alimentos: eat,
    mascotas: pets,
    trasporte: train,
    subscipciones: subsciptions,
    otros: other

}


const Gasto = ({ gasto }) => {
    // desestructuracion del prop de gasto
    const { nombre, categoria, cantidad, id, date } = gasto;
    // funcion que permitira el movimiento hacia la parte derecha mostrando editar para que el gasto sea editado.
    const leadingActions = () => (
        <LeadingActions>
            <SwipeAction onClick={()=>console.log('Edit')}>
                <FaRegEdit/>
            </SwipeAction>
        </LeadingActions>
    )
    //Funcion que permitira mover el gasto hacia la izquierda para poder Eliminar dicho gasto.
    const trailingActions = () => (
        <TrailingActions>
            <SwipeAction onClick={()=>console.log('eliminar')}>
                <RiDeleteBin5Line/>
            </SwipeAction>
        </TrailingActions>
    )

    return (
        <SwipeableList>
            <SwipeableListItem
                leadingActions={leadingActions()}
                trailingActions={trailingActions()}
            >
                <div className='gasto sombra'>
                    <div className="contenido-gasto">
                        <img src={dictionaryIcons[categoria]} alt='icon expense' />
                        <div className="descripcion-gasto">

                            <p className='categoria'>
                                {categoria}
                            </p>
                            <p className='nombre-gasto'>
                                {nombre}
                            </p>
                            <p className='fecha-gasto'>
                                Fecha de registro:{' '}
                                <span>{formatDate(date)}</span>
                            </p>
                        </div>
                    </div>
                    <p className='cantidad-gasto'>${cantidad}**</p>
                </div>
            </SwipeableListItem>
        </SwipeableList>
    )
}

export default Gasto