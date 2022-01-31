import React from 'react';
import LayoutPrivateFooter from './partials/LayoutPrivateFooter';
import LayoutPrivateNavbar from './partials/LayoutPrivateNavbar';

const LayoutPrivate = ({ children }) => {
  return (
    <>
        <LayoutPrivateNavbar />

        {/* Contenido */}

        <LayoutPrivateFooter />
    </>
  );
};

export default LayoutPrivate;


