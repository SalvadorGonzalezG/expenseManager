import React from 'react'
import { formatDate } from '../helpers';

import healt from '../img/heart.png'
import eat from '../img/food.png'
import pets from '../img/vet.png'
import train from '../img/train.png'
import subsciptions from '../img/subscribe.png'
import other from '../img/application.png'


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
    return (
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
    )
}

export default Gasto