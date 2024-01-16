import React from 'react'
import { FcBookmark } from "react-icons/fc";
    // pasamos el prop siendo una clase fija mesclada con una clase dinamica
const Message = ({children, tipo}) => {
    return (
        <div className={`alerta ${tipo}`}>
            {children}
            <FcBookmark/>
        </div>
    )
}

export default Message