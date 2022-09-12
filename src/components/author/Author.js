import React from 'react';

// React-router-dom
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// GQL
import { useQuery } from '@apollo/client';
import { GET_AUTHOR } from '../../graphql/queries';

// MUI
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Avatar, Container, Grid, IconButton, Typography } from '@mui/material';

// Sanitize
import sanitizeHtml from "sanitize-html"

// Componetns
import CardEL from '../shared/CardEL';
import Loading from '../shared/Loading';

const Author = () => {

    const navigate = useNavigate()

    const { authorSlug } = useParams()

    const { loading, data, error } = useQuery(GET_AUTHOR, {
        variables: {
            slug: authorSlug
        }
    })

    if (loading) return <Loading />

    if (error) return "Sth went wrong"

    const { avatar, description, posts, name, field } = data.author

    return (
        <Container maxWidth="lg" >
            <Grid  container mt={5}>

                <Grid item xs={12}>
                    <IconButton onClick={() => navigate(-1)}>
                        <ArrowBackIcon />
                    </IconButton>
                </Grid>

                <Grid item mt={3} xs={12} display="flex" flexDirection="column" alignItems="center">
                    <Avatar sx={{width: "250px", height: "250px"}} src={avatar.url} />
                    <Typography component="h3" variant="h5" fontWeight="700" mt={4}>
                        {name}
                    </Typography>
                    <Typography component="p" variant="h5" color="text.secondary" mt={2}>
                        {field}
                    </Typography>
                </Grid>

                <Grid item xs={12} mt={5}>
                    <div dangerouslySetInnerHTML={{__html: sanitizeHtml(description.html)}} >
                    </div>
                </Grid>

                <Grid item xs={12} mt={6}>
                    <Typography component="h3" variant="h6">
                        {name} Blogs
                    </Typography>

                    <Grid container spacing={2} my={3}>
                        {posts.map(post => <CardEL key={post.id} {...post} />)}
                    </Grid>
                </Grid>

            </Grid>
        </Container>
    );
};

export default Author;