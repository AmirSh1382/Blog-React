import React from 'react';

// Componetns
import Authors from '../author/Authors';
import Blogs from '../blog/Blogs';

// MUI
import { Container, Grid, Typography } from '@mui/material';

const HomePage = () => {
    return (
        <Container maxWidth="lg">
            <Grid container spacing={2} p={3} pt={0}>
                <Grid item xs={12} md={3} mt={4}>
                    <Typography component="h1" variant="h6" fontWeight="bold" mb={2}>Authors</Typography>
                    <Authors />
                </Grid>
                <Grid item xs={12} md={9} mt={4}>
                    <Typography component="h1" variant="h6" fontWeight="bold" mb={2}>Blogs</Typography>
                    <Blogs />
                </Grid>
            </Grid>
        </Container>
    );
};

export default HomePage;