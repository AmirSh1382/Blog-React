import React from 'react';

// MUI
import { Grid, Card, CardHeader, CardContent, Avatar, CardMedia, Typography, Divider, CardActions, Button } from '@mui/material';

// React-router-dom
import { Link } from 'react-router-dom';

// Functions
import { shorten } from '../../helper/functions';

const CardEL = ({ author, coverPhoto, title, slug }) => {

    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card sx={{boxShadow: "rgba(0,0,0,0.15) 0px 4px 12px", borderRadius: 4}}>
                {
                    author && (
                        <CardHeader 
                            avatar={<Avatar src={author.avatar.url}></Avatar>}
                            title={author.name}
                        />
                    )
                }
                <CardMedia 
                    image={coverPhoto.url}
                    component="img"
                    height="194"
                    alt={slug}
                />

                <CardContent>
                    <Typography component="p" variant='div' fontWeight={600}>{shorten(title)}</Typography>
                </CardContent>

                <Divider variant='middle' sx={{marginY: "10px", marginX: "8px"}}/>

                <CardActions>
                    <Link to={`/blogs/${slug}`} style={{width: "100%", textDecoration: "none"}}>
                        <Button variant='outlined' size='small' sx={{width: "100%", borderRadius: 3}}>Read Blog</Button>
                    </Link>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default CardEL;