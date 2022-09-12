import React from 'react';

// GQL
import { useQuery } from "@apollo/client"
import { GET_AUTHORS_INFO } from "../../graphql/queries"

// MUI
import { Avatar, Divider, Grid, Typography } from '@mui/material';

// React-router-dom
import { Link } from 'react-router-dom';

// Components
import Loading from '../shared/Loading';

const Authors = () => {

    const { loading, data, error } = useQuery(GET_AUTHORS_INFO)

    if (loading) return <Loading />

    if (error) return "Sth went wrong"

    const { authors } = data

    return (
        <Grid container sx={{boxShadow: "rgba(0,0,0,0.15) 0px 4px 12px", borderRadius: 4}}>
            {
                authors.map((author, index) => (
                    <React.Fragment key={author.id}>
                        <Grid item xs={12} p={2}>
                            <Link to={`/authors/${author.slug}`} style={{display: "flex", alignItems: "center", textDecoration: "none"}}>
                                <Avatar src={author.avatar.url} sx={{marginRight: 2}}></Avatar>
                                <Typography component="p" variant="p" color="text.secondary">
                                    {author.name}
                                </Typography>
                            </Link>
                        </Grid>
                        <Grid item xs={12}>
                            {index !== authors.length-1 && <Divider variant='middle' />}
                        </Grid>
                    </React.Fragment>
                ))
            }
        </Grid>
    );
};

export default Authors;