import React from 'react';
import Home from '../../pages/home/Home';
import LayoutPublicFooter from './partials/LayoutPublicFooter';
import LayoutPublicNavbar from './partials/LayoutPublicNavbar';

const LayoutPublic = ({ children }) => {
  return (
    <>
        <LayoutPublicNavbar />
            
                <Home  />
            
        <LayoutPublicFooter />
    </>
  );
};

export default LayoutPublic;