
    //Snipet para generar un id unico.
export const generarId = () => {
    //generar un numero random 
    const random = Math.random().toString(36).substring(2)
    const fecha = Math.random().toString(36)

    return random + fecha
}
    // formateo de fecha para cuando esta funcion se mande llamar en Gasto.jsx
export const formatDate = (fecha) => {
    const newDate = new Date(fecha);
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }
    return newDate.toLocaleDateString('es-ES', options)
}