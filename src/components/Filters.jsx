import { useEffect, useState } from 'react'

const Filters = ({filter, setFilter}) => {
    return (
        <div className='filtros sombra contenedor'>
            <form >
                <div className='campo'>
                    <label> Filtrar Gastos.</label>
                    <select 
                        value={filter}
                        onChange={(e)=>setFilter(e.target.value)}
                        >
                        <option value="">-- Categoria --</option>
                        <option value="salud">Salud.</option>
                        <option value="alimentos">Alimentos.</option>
                        <option value="mascotas">Mascotas.</option>
                        <option value="trasporte">Transporte.</option>
                        <option value="subscipciones">Subscripciones.</option>
                        <option value="otros">Otros Gastos</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default Filters