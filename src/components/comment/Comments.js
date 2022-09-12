import React from 'react';

// Components
import Comment from './Comment';

// MUI
import { Typography, Grid } from '@mui/material';

const Comments = ({comments}) => {
    
    return (
        <div>
            <Typography component="h3" variant="h6" color="primary" fontWeight="600" m={2}>
                Comments
            </Typography>

            <Grid container px={2}>
                {
                    comments.map(comment => <Comment key={comment.id} {...comment} />)
                }
            </Grid>
        </div>
    );
};

export default Comments;