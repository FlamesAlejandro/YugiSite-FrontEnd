import React from 'react';
import Home from '../../pages/home/Home';
import Login from "../../pages/Login/Login";
import LayoutPublicFooter from './partials/LayoutPublicFooter';
import LayoutPublicNavbar from './partials/LayoutPublicNavbar';

const LayoutPublic = ({ children }) => {
  return (
    <>
        <LayoutPublicNavbar />
            
                <Login  />
            
        <LayoutPublicFooter />
    </>
  );
};

export default LayoutPublic;