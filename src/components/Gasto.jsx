import React from 'react'

const Gasto = ({gasto}) => {
    // desestructuracion del prop de gasto
    const{ nombre, categoria, cantidad, id } = gasto;
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
                <p></p>
            </div>
        </div>
    </div>
  )
}

export default Gasto