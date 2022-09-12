import React from 'react';

// MUI
import { Typography } from '@mui/material';

const Footer = () => {
    return (
        <footer style={{marginTop: "auto"}}>
            <Typography mt={3} p={1} textAlign="center" component="p" varient="p" bgcolor="#1976d2" color="#f7f7f7">
                React Weblog Project
            </Typography>
        </footer>
    );
};

export default Footer;