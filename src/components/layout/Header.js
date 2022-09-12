import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import React from 'react';

// MUI
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';

// React-router-dom
import { Link } from 'react-router-dom';

const Header = () => {


    return (
        <AppBar position='static'>
            <Toolbar>
                <Container maxWidth="lg" sx={{display: "flex"}}>
                    <Typography component="h1" variant='h5' fontWeight="500" flex={1}> 
                        <Link to="/" style={{textDecoration: "none", color: "#f7f7f7"}}>
                            ReactBlog
                        </Link>
                    </Typography>

                        <BookOutlinedIcon/>
                </Container>
            </Toolbar>
        </AppBar>
    );
};

export default Header;