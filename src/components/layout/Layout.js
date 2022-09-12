import React from 'react';

// Componetns
import Header from "./Header"
import Footer from './Footer';

const Layout = ({children}) => {
    return (
        <div style={{display: "flex", flexDirection: "column", minHeight: "100vh"}}>
            <Header />
            {children}
            <Footer />
        </div>            
    );
};

export default Layout;