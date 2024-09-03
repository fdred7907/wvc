import * as React from 'react';
import Card from '@mui/material/Card';
import { CardContent,Typography,Button,CardMedia}  from '@mui/material';
import {lime} from '@mui/material/colors';

const titleColor = lime[500];
function ServiceCard(props){
    return(
        <Card elevation={3} 
        sx={{
            height:"100%",
            }}>
            <CardMedia
                component="img"
                image={props.image}
                sx={{
                    mb:'10px'
                }}
            />
           
            <CardContent
            sx={{
                alignContent:"center"
            }}>
                <Typography variant="h5" component="div" color="info.dark"
                sx={{
                    my:'5px'
                }}>
                    {props.title}
                </Typography>
                <Typography variant="body2"
                sx={{
                    my:'5px'
                }}>
                    {props.description}
                </Typography>
                <Button variant="contained" sx={{
                    color:titleColor,
                    fontWeight:'900',
                    my:'5px'
                }}>View Details</Button>
            </CardContent>
        </Card>
    )

}

export default ServiceCard;