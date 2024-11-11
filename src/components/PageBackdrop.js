import React from 'react';
import './PageBackdrop.css';

const PageBackdrop = ({ children }) => {
    return (
        <div className="page-backdrop">
            {children}
        </div>
    );
};

export default PageBackdrop;
