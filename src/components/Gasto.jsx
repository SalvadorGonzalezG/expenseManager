import React from 'react'
import { formatDate } from '../helpers';

const Gasto = ({gasto}) => {
    // desestructuracion del prop de gasto
    const{ nombre, categoria, cantidad, id, date } = gasto;
  return (
    <div className='gasto sombra'>
        <div className="contenido-gasto">
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
    </div>
  )
}

export default Gasto