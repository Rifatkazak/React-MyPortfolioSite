import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import profile from "../assets/profile.jpeg";
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import AttachmentIcon from '@mui/icons-material/Attachment';

const useStyles = makeStyles((theme) => ({

  card :{
    marginTop : "7rem"
  },
  avatar : {
    margin : "auto",
  },
  cardContent : {
    textAlign : "center",
  },
  icons:{
    width : "60%",
    margin: "auto",
    display : "flex", 
    justifyContent : "space-between",
  },
}));

export default function Home() {
    const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl" >
        <Card sx={{ maxWidth: 345 }} className = {classes.card}>
            <Avatar className = {classes.avatar}
            alt="Esat Yasar"
            src= {profile}
            sx={{ width: 300, height: 300 }}
            />
            <CardContent className = {classes.cardContent}>
                <Typography gutterBottom variant="h5" component="div">
                Esat Yasar
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Full Stack Developer
                </Typography>
            </CardContent>
            <CardActions className = {classes.icons}>
                <MailIcon />
                <LinkedInIcon />
                <GitHubIcon/>
                <AttachmentIcon/>
            </CardActions>
        </Card>
      </Container>
    </React.Fragment>
  );
}