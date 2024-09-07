import * as React from 'react';
import {Grid,Typography,Card,CardContent,CardMedia,CardHeader} from '@mui/material';
import SMMImage from '../Images/smm.jpg';
import ConImage from '../Images/content.jpg';
import StrImage from '../Images/strategy.jpg';
import TrackImage from '../Images/tracking.jpg';
import {teal} from '@mui/material/colors';

function Services(){
    return(

        <React.Fragment>
            <Grid container spacing={12} sx={{
                width:"80%",
                mx:"auto",
                my:"40px"
            }}>
                <Grid item xs={3}>
                <Typography variant="h3" color="primary.dark" >Our Services</Typography>

                </Grid>
                <Grid item xs={9}>
                    <Typography variant="h3" color="info.dark">Content Marketing, Social Media, Strategy and Engagement</Typography>
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
                            title="Social Media Marketing"
                            sx={{textAlign:'center' , color:'info.dark',fontSize:"10rem"}}
                        />
                            
                        <CardContent>
                            <Typography variant="h4" sx={{ 
                                textAlign:'center',
                                my:'10px' ,
                                color:teal[900]
                            }}>
                                Social Media is the place to be to know the pulse of your industry. We connect you with key decision makers and businesses to help you build brand awareness, brand value and nurture relationships. We use the best communication techniques and positions to ensure that you reach the target audience fast.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card>
                        <CardMedia 
                            component="img"
                            
                            image={SMMImage}
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
                            
                            image={ConImage}
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
                            title="Content Marketing"
                            sx={{textAlign:'center' , color:'info.dark',fontSize:"10rem"}}
                        />
                            
                        <CardContent>
                            <Typography variant="h4" sx={{ 
                                textAlign:'center',
                                my:'10px' ,
                                color:teal[900]
                            }}>
                                We nurture your potential clients and nurture them down the funnel with top-notch content marketing. We analyse and follow our industries closely and create insightful content to build subject matter authority and connect you wiht your audience. Our marketeres create on the latest trends, key drivers, propositions and outlooks to boost up your marketing and close deals easily.
                            </Typography>
                        </CardContent>
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
                            title="Strategy and Engagement"
                            sx={{textAlign:'center' , color:'info.dark',fontSize:"10rem"}}
                        />
                            
                        <CardContent>
                            <Typography variant="h4" sx={{ 
                                textAlign:'center',
                                my:'10px' ,
                                color:teal[900]
                            }}>
                                We understand your strategy and help execute it digitally with follow-up and engagement. In the competitive landscape, the right moves can make you stand out and win deals, and we are your trusted partner for driving the right strategy to fruitful execution and growth.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card>
                        <CardMedia 
                            component="img"
                            
                            image={StrImage}
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
                            
                            image={TrackImage}
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
                            title="Tracking and Measurement"
                            sx={{textAlign:'center' , color:'info.dark',fontSize:"10rem"}}
                        />
                            
                        <CardContent>
                            <Typography variant="h4" sx={{ 
                                textAlign:'center',
                                my:'10px' ,
                                color:teal[900]
                            }}>
                                Tracking your key KPIs helps align your efforts and improve marketing ROI. We help track all key metrics so that every dime spent on your digital strategy is worth it. Scaling up digital is key to have the company reap rewards and we track it to make sure we deliver the best results for you.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        
            
        </React.Fragment>
    )
}

export default Services;