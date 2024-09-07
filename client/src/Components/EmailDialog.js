import * as React from 'react';
import {Button,TextField,Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle} from '@mui/material';
import axios from 'axios';

const apiUrl = 'http://localhost:5000';


function EmailDialog() {
    const [open,setOpen] = React.useState(false);

    const handleClickOpen = () =>{
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Button variant="contained" onClick={handleClickOpen}>
                Subscribe for updates
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                elevation={3}
                fullWidth
                PaperProps={{
                    component:"form",
                    onSubmit:(e)=>{
                        e.preventDefault();
                        const formData = new FormData(e.currentTarget);
                        const data = {
                            name:formData.get('name'),
                            email:formData.get('email')
                        }
                        axios.post(`${apiUrl}/email/subscribe`,data)
                        .then((res)=>{
                                console.log(res.data);
                                handleClose();
                            
                        })  
                        .catch((err)=>{
                            console.log(err);
                        })      
                    },
                    style:{
                        backgroundColor:"none"
                    }
                }}
                >
                    <DialogTitle>Subscribe for latest industry insights and offers</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please enter your name and email address below to subscribe.
                        </DialogContentText>
                        <TextField 
                            id="name"
                            name="name"
                            label="name"
                            fullWidth
                            required
                            autoFocus
                            variant="standard"
                        />
                        <TextField
                            id='email'
                            name="email"        
                            label="email"
                            fullWidth
                            required
                            variant="standard"
                            type="email"
                            
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button type="submit">Subscribe</Button>
                    </DialogActions>
                </Dialog>
        </React.Fragment>
    );
}

export default EmailDialog