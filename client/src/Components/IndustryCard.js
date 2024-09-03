import * as React from 'react';
import Card from '@mui/material/Card';
import { CardContent,Typography,CardMedia}  from '@mui/material';

export default function IndustryCard(props){
    return(
        <Card>
            <CardMedia
                component="img"
                image={props.image}
            />
            <CardContent>
                <Typography variant="h5" color="info.dark" component="div">
                    {props.title}
                </Typography>
                <Typography variant="body2">
                    {props.description}
                </Typography>   

            </CardContent>
        </Card>
    )
}