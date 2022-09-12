import React from 'react';

// GQL
import { useQuery } from "@apollo/client"
import { GET_BLOGS_INFO } from '../../graphql/queries';

// MUI
import { Grid } from '@mui/material';
import CardEL from '../shared/CardEL';

// Components
import Loading from '../shared/Loading';

const Blogs = () => {

    const { loading, data, errors } = useQuery(GET_BLOGS_INFO)

    if (loading) return <Loading />

    if (errors) return "Sth went wrong"

    return (
        <Grid container maxWidth="lg" spacing={2}>

            {
                data.posts.map(post => <CardEL key={post.id} {...post} />)
            }

        </Grid>
    );
};

export default Blogs;