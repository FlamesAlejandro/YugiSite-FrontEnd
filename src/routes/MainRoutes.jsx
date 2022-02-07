import React, { useEffect, useContext } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Navigate
  } from 'react-router-dom';
import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';
import {AuthContext} from "../api/auth/AuthContext";

const MainRoutes = () => {

  const {user} = useContext(AuthContext); // Obtener el usuario

	return <Router>{!!!user.logged ? <PublicRoutes /> : <PrivateRoutes />}</Router>; // Verificar si esta o no logeado

};

export default MainRoutes;
  