import React,{useState,useEffect} from 'react';

import { Typography,Container,Grid,Card,CardContent,TextField,Button} from '@mui/material';

import {Add as AddIcon} from '@mui/icons-material';

import axios from 'axios';
import {dateParser} from '../helpers/dateHelper';
// import './App.css';

const apiUrl = 'http://localhost:5000';

function Blog(){
    const [posts,setPosts] = useState([]);
    const [newPost,setNewPost] = useState({
        title:'',
        content:'',
    });

    useEffect(()=>{
        axios.get(`${apiUrl}/posts`)
        .then(res=>{
            setPosts(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[]);

    const handleInputChange = (e)=>{
        const {name,value} = e.target;
        setNewPost(prevState=>{
            return {
                ...prevState,
                [name]:value
            }
        });
    };

    const handleAddPost = () =>{
        axios.post(`${apiUrl}/posts`,newPost)
        .then(res => {
            setPosts(prevState =>{
                return [...prevState,res.data];
            });
            setNewPost({
                title:'',
                content:'',

            });
        })
        .catch(err=>{
            console.log(err);
        });
    };

    const handleDeletePost = (id)=>{
        axios.delete(`${apiUrl}/posts/${id}`)
        .then(res =>{
            setPosts(prevState=>{
                return prevState.filter(post=>post._id!==id);
            })
        })
        .catch(err=>{
            console.log(err)
        });
    }
    return (
        <div>
            <Typography variant="h2" color="info.dark" sx={{
                my:'10px',
                textAlign:'center'
            }}>Blog</Typography>
            <Container maxWidth="lg">
                <Grid container spacing={12}>
                    <Grid item xs={12}>
                        <Card>
                            <CardContent>
                                <TextField
                                    name='title'
                                    label='Title'
                                    value={newPost.title}
                                    onChange={handleInputChange}
                                    fullWidth
                                    margin='normal'
                                />
                                <TextField
                                    name='content'
                                    label='Content'
                                    value={newPost.content}
                                    onChange={handleInputChange}
                                    fullWidth
                                    margin='normal'
                                    multiline
                                />
                            </CardContent>
                            <Button
                                variant="contained"
                                color='primary'
                                startIcon={<AddIcon color="secondary"/>}
                                onClick={handleAddPost}
                                >
                                    <Typography variant="body2" color="secondary">
                                    Add Post
                                    </Typography>
                            </Button>
                        </Card>
                    </Grid>
                    {posts.map(post=>{
                        return (
                            <Grid item xs={6} key={post._id}>
                                <Card>
                                    <CardContent>
                                        <Typography variant="h4" color="info.dark" sx={{
                                            my:'10px'
                                        }}>{post.title}</Typography>
                                        <Typography variant="body2" color="info.light" sx={{
                                            my:'10px'   
                                        }}>{dateParser(post.createdAt)}</Typography>
                                        <Typography variant="body2" sx={{
                                            my:'10px'
                                        }}>{post.content}</Typography>
                                    </CardContent>
                                    <div>
                                        <Button 
                                            variant="outlined"
                                            color="primary"
                                            onClick={()=>{
                                                handleDeletePost(post._id)
                                            }
                                        }
                                        >Delete</Button>
                                    </div>
                                </Card>
                            </Grid>
                        )
                    })}
                </Grid>
            </Container>
        </div>
    )
}

export default Blog;