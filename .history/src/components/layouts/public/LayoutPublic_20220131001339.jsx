import React from 'react';
import LayoutPublicFooter from './partials/LayoutPublicFooter';
import LayoutPublicNavbar from './partials/LayoutPublicNavbar';

const LayoutPublic = ({ children }) => {
  return (
    <>
        <LayoutPublicNavbar />

            <Homew  />

        <LayoutPublicFooter />
    </>
  );
};

export default LayoutPublic;