import React from "react";
import CollapsibleExample from "../Components/Navbar.js";
import footerImage from "../media/Homefooter.jpg";
import "../stylesheets/Home.css";
import HomeTextAnimation from "../Components/HomeTextAnimation.js";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
//import CategoryButtonCard from "../Components/CategoryButtonCard.js";
function Home(){
    return (
        <>
            <CollapsibleExample />
            <div class="body">
                <div class="img_container_footer">
                    <img src={footerImage} alt="labor" style={{width:'1500px' ,height:'500px'}} />
                        <div class="img-bottom">
                            <div id="text_animation_container">
                                <HomeTextAnimation id="text_animation" />
                            </div>
                            <div id="hire_button_container">
                                <Button variant="contained" color="success" id="hire_button" >hire labor</Button>
                            </div>
                            <div id="services_buttons_group">
                                <Stack direction="row" spacing={2}>
                                    <Button variant="outlined" color="success" size="small">
                                        electrician
                                    </Button>
                                    <Button variant="outlined" color="success" size="small">
                                        carpanter
                                    </Button>
                                    <Button variant="outlined" color="success" size="small">
                                        plumber
                                    </Button>
                                    <Button variant="outlined" color="success" size="small">
                                        painter
                                    </Button>
                                    <Button variant="outlined" color="success" size="small">
                                        house cleaner
                                    </Button>
                                </Stack>
                            </div>
                        </div>
                </div>
                <div id="footer">
                    <Grid container spacing={2}>
                        <Grid item xs={6} md={3} >
                                <a href="D:\mazdoor-react-app\src\pages\BiddingForm.js">
                                    <Card sx={{ maxWidth: 345 }}>
                                        <CardActionArea>
                                            <CardMedia
                                            component="img"
                                            height="200"
                                            image="..\media\carpanter.jpg"
                                            alt="Carpanter"
                                            />
                                            <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Carpanter
                                            </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </a>
                        </Grid>
                        <Grid item xs={6} md={3}>
                                <a href="D:\mazdoor-react-app\src\pages\BiddingForm.js">
                                    <Card sx={{ maxWidth: 345 }}>
                                        <CardActionArea>
                                            <CardMedia
                                            component="img"
                                            height="200"
                                            image="..\media\Painter.jpg"
                                            alt="Carpanter"
                                            />
                                            <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Carpanter
                                            </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </a>
                        </Grid>
                        <Grid item xs={6} md={3}>
                        </Grid>
                        <Grid item xs={6} md={3}>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </>
    );
}
export default Home;