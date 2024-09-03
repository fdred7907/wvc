import * as React from 'react';
import {Grid,Typography} from '@mui/material';
import ServiceCard from './ServiceCard';
import SMMImage from '../Images/alexander-shatov-9Zjd7PE_FRM-unsplash.jpg';
import ConImage from '../Images/austin-distel-wD1LRb9OeEo-unsplash.jpg';
import StrImage from '../Images/felix-mittermeier-nAjil1z3eLk-unsplash.jpg';
import TrackImage from '../Images/jakub-zerdzicki-hGMONQ4T7Co-unsplash.jpg';

function ServicesGallery() {
    return (
        <Grid container spacing={12} sx={{
            width:"80%",
            mx:"auto",
            my:"80px"
        }}>
            <Grid item xs={3}>
                <Typography variant="h3" >What we do?</Typography>

            </Grid>
            <Grid item xs={9}>
                <Typography variant="h3" color="primary">An insightful industry partner to help you become leaders in your market.</Typography>
            </Grid>
            <Grid item xs={6}>
                <ServiceCard elevation={3} 
                image={SMMImage} title="Social Media Marketing" 
                description="We connect with your clients on social and promote your unique proposition. Continuous content and engagement makes it a win-win relation between your business and your clients."/>
            </Grid>
            <Grid item xs={6} >
                <ServiceCard elevation={3} 
                image={ConImage} title="Content Marketing" 
                description="Boost up yoru authority and showccase industry expertise with our long form content. We follow the industry closely and bring key insights to yoru audience."/>
            </Grid>
            <Grid item xs={6} >
                <ServiceCard elevation={3} image={StrImage} title="Strategy and Engagement" 
                description="We promote your niche and partner with you to implement your winning strategy. We help you build a winning relationship with your clients."/>
            </Grid>
            <Grid item xs={6} >
                <ServiceCard elevation={3} image={TrackImage} title="Tracking and Measuring" 
                description="We build your online presence and help you grow your business. We track and measure ROI to ensure your business grows."/>
            </Grid>

        </Grid>
    )
}

export default ServicesGallery
