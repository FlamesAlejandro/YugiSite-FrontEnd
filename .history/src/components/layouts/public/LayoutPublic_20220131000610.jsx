import React from 'react';
import LayoutPublicFooter from './partials/LayoutPublicFooter';
import LayoutPublicNavbar from './partials/LayoutPublicNavbar';

const LayoutPublic = ({ children }) => {
  return (
    <>
        <LayoutPublicNavbar />

        <div sx={{ mt: 15 }}>{children}</d>

        <LayoutPublicFooter />
    </>
  );
};

export default LayoutPublic;