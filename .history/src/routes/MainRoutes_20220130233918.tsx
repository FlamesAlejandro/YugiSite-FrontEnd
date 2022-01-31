import React, { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Navigate
  } from 'react-router-dom';
import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';

const MainRoutes = () => {
  return (
    <PublicRoutes 
        exact 
        path="/home"
    />
  )
};

export default MainRoutes;
  