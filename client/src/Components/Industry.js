import * as React from 'react';
import {Grid,Typography} from '@mui/material';
import IndustryCard from './IndustryCard';
import DefImage from '../Images/michael-afonso-BQgAYwERXhs-unsplash.jpg';
import SpaceImage from '../Images/spacex-uj3hvdfQujI-unsplash.jpg';
import GovImage from '../Images/luca-bravo-XJXWbfSo2f0-unsplash.jpg';

function Industry(){
    return(
        <Grid container spacing={12} sx={{
            width:"80%",
            mx:"auto",
            my:"80px"
        }}>
            <Grid item xs={12}>
                <Typography variant="h3" color="primary">Industries We Serve</Typography>
            </Grid>
            <Grid item xs={4}>
                <IndustryCard title="Defense" 
                image={DefImage}
                description="Indian Defense is in a resurgence phase driven by an urent need of self reliance and indigeisation. India is also focussed on becoming a net exporter of high-tech defense products. We help defense sector MSMEs and enterprises to grow their business ."
                />
            </Grid>
            <Grid item xs={4}>
                <IndustryCard title="Space"
                image={SpaceImage}
                description="Space sector is transforming industries with new data points for crucial business decision making. We help space sector companies win in their market niches."
                />
            </Grid>
            <Grid item xs={4}>
                <IndustryCard title="Government"
                image={GovImage}
                description="With ever changing electoral dynamics and changing aspirations and needs of the Indian voter, getting the right strategy for your campaigns is crucial. We help plan campaigns and reach out to your target voter with cutting-edge public relations techniques."
                />
            </Grid>
        </Grid>
    )
}

export default Industry;