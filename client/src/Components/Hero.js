import * as React from 'react';
import {Box} from '@mui/material';
import heroImg from '../Images/luca-bravo-XJXWbfSo2f0-unsplash.jpg'
import {Typography} from '@mui/material';

function Hero(){
    return (


        <Box>
            <Box
                sx={{
                    backgroundImage:`url(${heroImg})`,
                    height:'100vh',
                    width:'100vw',
                    backgroundSize:'cover',
                    backgroundPosition:'center',
                    backgroundRepeat:'no-repeat',
                    position:'relative',
                    top:0,
                    left:0,
                    zIndex:-1,
                    filter:'opacity(50%)'
                }}
            >

            </Box>
            <Typography variant="h1"
            sx={{
                position:'absolute',
                zIndex:1,
                top:'50%',
                left:'50%',
                transform:'translate(-50%,-50%)',
                // m:'auto',
            }}
            color="primary"
            >WhereVCare</Typography>
            <Typography variant="h3"
            sx={{
                position:'absolute',
                zIndex:1,
                top:'60%',
                left:'50%',
                transform:'translate(-50%,-60%)',
                // m:'auto',
            }}
            color="secondary"

            >Where Passion Meets Pride</Typography>
            <Typography variant="h4"
            sx={{
                position:'absolute',
                zIndex:1,
                top:'70%',
                left:'50%',
                transform:'translate(-50%,-70%)',
                color:"info.dark",
                m:'auto',
                textAlign:'center'
            }}
            >Marketers and Industry Partners for Defense, Space, and Governments</Typography>

        </Box>
    )
}

export default Hero;