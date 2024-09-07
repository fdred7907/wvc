import * as React from 'react';
import {Box,Typography,Grid,Card,CardContent,CardHeader, CardMedia} from '@mui/material';
import MissionImg from '../Images/mission.jpg';
import StoryImg from '../Images/ourstory.jpg';
import {teal,lime} from '@mui/material/colors';


function About(){
    return (
        <React.Fragment>
            
            
            
            <Grid container spacing={12} sx={{
                width:"80%",
                mx:"auto",
                my:"40px"
            }}>
                <Grid item xs={3}>
                <Typography variant="h3" color="primary.dark" >Who we are?</Typography>

                </Grid>
                <Grid item xs={9}>
                    <Typography variant="h3" color="info.dark">Passionate Marketers for Defense , Space and Governments</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Card
                    sx={{
                        height:"80vh",
                        p:"20px",
                    }}>
                        <CardHeader
                            titleTypographyProps={{variant:'h1'}}
                            subheaderTypographyProps={{variant:'h3'}}
                            title="Our Mission"
                            subheader="Pride Meets Passion"
                            sx={{textAlign:'center' , color:'info.dark',fontSize:"10rem"}}
                        />
                            
                        <CardContent>
                            <Typography variant="h4" sx={{ 
                                textAlign:'center',
                                my:'10px' ,
                                color:teal[900]
                            }}>
                                To be the leader in marketing for defense, space and government. We meld pride with passion and are keen followers of our target sectors. With key insights, winning strategies and unique communication techniques, we help businesses connect with their clients deeply to help fast track them on the growth path.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card>
                        <CardMedia 
                            component="img"
                            
                            image={MissionImg}
                            sx={{
                                height:"80vh"
                            }}
                        />
                    </Card>
                </Grid>
                
                <Grid item xs={6}>
                    <Card>
                        <CardMedia 
                            component="img"
                            
                            image={StoryImg}
                            sx={{
                                height:"80vh"
                            }}
                        />
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card
                    sx={{
                        height:"80vh",
                        p:"20px",
                    }}>
                        <CardHeader
                            titleTypographyProps={{variant:'h1'}}
                            subheaderTypographyProps={{variant:'h3'}}
                            title="Our Story"
                            subheader="Influence Meets Impact"
                            sx={{textAlign:'center' , color:'info.dark',fontSize:"10rem"}}
                        />
                            
                        <CardContent>
                            <Typography variant="h4" sx={{ 
                                textAlign:'center',
                                my:'10px' ,
                                color:teal[900]
                            }}>
                                We were living our lives when we came face-to-face with the power of influence in real life. At the same time, India's massive push in indigensiation in Defense and Space at the beginning of this decade caught our attention. We were also drawn into the policies driving these two industries and the larger political scene in it. These multiple perspectives melded together and led to the genesis of WhereVCare.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        
            
        </React.Fragment>
    )
}

export default About;