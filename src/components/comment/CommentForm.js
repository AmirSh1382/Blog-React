import React, { useState } from 'react';

// React-toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// MUI
import { Button, Grid, TextField, Typography } from '@mui/material';

// GQL
import { useMutation } from '@apollo/client';
import { SEND_COMMENT } from '../../graphql/mutations';

const CommentForm = ({slug}) => {

    const [ name, setName ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ text, setText ] = useState("")

    const [ sendComment, { loading } ] = useMutation(SEND_COMMENT, {
        variables: {name, email, text, slug}
    })

    const formValidation = async () => {
        if(name && email && text){
            try {
                await sendComment()

                setName("")
                setText("")
                setEmail("")

                toast.success("Comment sent and it will be publish sonn" , {
                    position: "top-center"
                })
            } catch (error){
                toast.warn("Sth went wrong" , {
                    position: 'top-center'
                })
            }
        }else {
            toast.warn("Please fill all the blanks" , {
                position: 'top-center'
            })
        }
    }

    return (
        <Grid container sx={{boxShadow: "rgba(0,0,0,0.15) 0px 4px 12px", borderRadius: 4, mt: 3, mb: 1, py: 1}}>
            <ToastContainer />

            <Grid item xs={12} m={2}>
                <Typography component="h3" variant="h6" color="primary" fontWeight="600">
                    Post Comment
                </Typography>
            </Grid>

            <Grid item xs={12} m={2}>
                <TextField 
                    size="small" 
                    label="Name"
                    varient="outlined"
                    fullWidth
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </Grid>

            <Grid item xs={12} m={2}>
                <TextField 
                    size="small" 
                    label="Email"
                    varient="outlined"
                    fullWidth
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </Grid>

            <Grid item xs={12} m={2}>
                <TextField 
                    size="small"
                    label="Comment"
                    varient="outlined"
                    fullWidth
                    value={text}
                    onChange={e => setText(e.target.value)}
                    multiline
                />
            </Grid>

            <Grid item xs={12} m={2} mt={3}>
                {
                    !loading ? (
                        <Button variant='contained' onClick={formValidation}>
                            Send
                        </Button>
                    ) : (
                        <Button variant='contained' disabled>
                            Sending ...
                        </Button>
                    )
                }
            </Grid>
        </Grid>
    );
};

export default CommentForm;