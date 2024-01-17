
   //Snipet para generar un id unico.
export const generarId = () => {
    //generar un numero random 
    const random = Math.random().toString(36).substring(2)
    const fecha = Math.random().toString(36)

    return random + fecha
}