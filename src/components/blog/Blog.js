import React, { useEffect } from 'react';

// React-router-dom
import { useNavigate, useParams } from 'react-router-dom';

// GQL
import { useQuery } from '@apollo/client';
import { GET_BLOG } from '../../graphql/queries';

// Componetns
import CommentForm from '../comment/CommentForm';
import Comment from '../comment/Comment';
import Loading from '../shared/Loading';

// MUI
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Avatar, Card, CardHeader, Container, Grid, IconButton, Typography } from '@mui/material';

// Sanitize
import sanitizeHtml from 'sanitize-html';
import Comments from '../comment/Comments';

const Blog = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }, [])

  const naviagte = useNavigate()
  
  const { blogSlug } = useParams()

  const { loading, data, error } = useQuery(GET_BLOG ,{
    variables: {
      slug: blogSlug
    }
  })

  if (loading) return <Loading />

  if (error) return "Sth went wrong"

  const { title, coverPhoto, author, content, slug, comments } = data.post

  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid item xs={12} display= "flex" alignItems= "center" justifyContent= "space-between" my={6}>
          <Typography component="h3" variant="h5" fontWeight="700">
            {title}
          </Typography>

          <IconButton onClick={() => naviagte(-1)}>
            <ArrowBackIcon />
          </IconButton>
        </Grid>

        <Grid item xs={12}>
          <img src={coverPhoto.url} style={{borderRadius: "15px", width: "100%"}} alt={title}/>
        </Grid>

        <Grid item xs={12} mt={3} mb={1}>
          <Card sx={{boxShadow: "none"}}>
            <CardHeader
              avatar={<Avatar src={author.avatar.url} sx={{width: "60px", height: "60px"}} />}
              title={<Typography component="h3" variant= "h6">{author.name}</Typography>}
              subheader={author.field}
            />
          </Card>
        </Grid>

        <Grid item xs={12}>
          <div dangerouslySetInnerHTML={{__html: sanitizeHtml(content.html)}}>
          </div>
        </Grid>

        <Grid item xs={12}>
          <CommentForm slug={slug} />
        </Grid>

        {
          comments.length && (
            <Grid item xs={12} sx={{boxShadow: "rgba(0,0,0,0.15) 0px 4px 12px", borderRadius: 4, my: 4, py: 2}}>
              <Comments comments={comments} />
            </Grid>
          )
        }

      </Grid>
    </Container>
  );
};

export default Blog;