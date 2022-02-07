/*
    Creacion Yugisite

    Llevamos a cabo el llamado de un context y reducer
    Context: Estado del usuario en la pagina (Conectado/Desconectado)
    Reducer: Cambiar el estado del usuario

*/


import { useEffect, useReducer } from 'react';
import MainRoutes from './routes/MainRoutes';
import {AuthContext} from "./api/auth/AuthContext";
import {AuthReducer} from "./api/auth/AuthReducer";

// Inicializamos el estado del usuario
const init = () => {
  return JSON.parse(localStorage.getItem('user')) || {logged: false}; // Si el usuario existe lo obtenemos, si no, lo guardamos como desconectado

};


function Yugisite() {

  const [user, dispatch] = useReducer(AuthReducer, {}, init); // Obtenemos el reducer de la sesion

  // Estamos atentos a la actualizacion del user
  useEffect(() => {
    if(!user) return;   // Si no existe el usuario, no realizamos nada

    localStorage.setItem('user', JSON.stringify(user)); // Si el usuario existe lo guardamos en el localStorage
}, [user]); // Atentos al cambio de usuario

    return (
      <AuthContext.Provider value={{user, dispatch}}> {/* Creamos el context que guardara el estado del user y su funcion para cambiarlo */}
        <MainRoutes />
      </AuthContext.Provider>
    );
  }
  
  export default Yugisite;
  
 