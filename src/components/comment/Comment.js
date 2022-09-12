import React from 'react';

// MUI
import { Avatar, Box, Grid, Typography } from '@mui/material';

const Comment = ({name, text}) => {

    return (
        <Grid 
            item
            border= "1px solid rgba(0,0,0,0.2)" 
            borderRadius={2}
            xs={12}
            m={1} 
            p={2} 
        >
            <Box component="div" display="flex" alignItems="center" mb={3}>
                <Avatar>{name[0]}</Avatar>
                <Typography component="span" variant="p" fontWeight={600} marginLeft={2}>
                    {name}
                </Typography>
            </Box>            
            <Typography component="p" variant="p" marginLeft={2}>
                {text}
            </Typography>
        </Grid>
    );
};

export default Comment;