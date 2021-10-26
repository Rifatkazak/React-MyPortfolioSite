import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { makeStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import profile from "../assets/profile.jpeg";
import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import AttachmentIcon from "@mui/icons-material/Attachment";
import Box from "@mui/material/Box";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import cv from "../assets/Rifat_Kazak_Resume.pdf"
import styles from "./style.module.css"

const useStyles = makeStyles((theme) => ({
  text: {
    marginTop: "7rem",
    marginLeft: "5rem",
    order : "1",
    height : "100%"
  },
  card: {
    marginTop: "7rem",

  },
  avatar: {
    margin: "auto",
  },
  cardContent: {
    textAlign: "center",
    
  },
  icons: {
    width: "60%",
    margin: "auto",
    display: "flex",
    justifyContent: "space-between",
  },
  link: {
    textDecoration: "none",
    color: "#171B26",
  },
  subtitles: {
    marginTop:"2rem",
    width : "70%",
    display: "flex",
    justifyContent : "space-around",
  },
  certificate:{
    listStyle :"none",
  },
  bodyText:{
    fontSize: "1rem",
    fontWeight : "500",
  },

}));

export default function Home() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        maxWidth="xl"
        sx={{ display: "flex"}}
        className={styles.cardContainer}
      >
        <Card sx={{ minWidth: 300 }} className={classes.card}>
          <Avatar
            className={classes.avatar}
            alt="Rifat Kazak"
            src={profile}
            sx={{ width: 300, height: 300 }}
          />
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="div">
              Rifat KAZAK 
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Full Stack Developer
            </Typography>
          </CardContent>
          <CardActions className={classes.icons}>
            <a href="mailto:rifatkazak20@gmail.com" className={classes.link}>
              <MailIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/rifat-kazak/"
              className={classes.link}
              target="blank"
            >
              <LinkedInIcon />
            </a>
            <a href="https://github.com/Rifatkazak" className={classes.link} target="blank">
              <GitHubIcon />
            </a>
            <a href={cv} className={classes.link} target="blank">
              <AttachmentIcon />
            </a>
          </CardActions>
        </Card>
        <Box
          className={classes.text}
          sx={{
            width: "70%",
            height: 500,
            /* backgroundColor: "primary.main", */
          }}
        >
          <Typography  gutterBottom component="div">
            <h2>Biograpghy</h2>
          </Typography>
          <p className = {classes.bodyText}>
          After working as a mechanical engineer for seven years, I realized that I was interested in software development.And so ı have built up a diverse range of skills and qualities about websites and web apps.
I am passionate about new technologies and concepts to develop innovative and creative solutions to problems.Also ı can create algorithms effectively, interact positively and communicate appropriately with team members. I always eager to learn various technologies, tools and libraries.Especially interested in Mobile/Front end/Web Development, Jira, SDLC, HTML5, CSS3, Bootstrap, SASS, GitHub, Python, SQL, React.js and JavaScript. I am still disposed to learn new things in this field. You can review my projects on my GitHub account.
          </p>
          <div className={classes.subtitles}>
            <ul>
              <Typography variant="h5" gutterBottom component="div">
                    Interests
              </Typography>
              <li>Travelling to new country</li>
              <li>Camping in Natural Sights</li>
              <li>Read an article about new technology</li>
            </ul>
            <ul className = {classes.certificate}>
              <Typography variant="h5" gutterBottom component="div">
                    Certifications
              </Typography>
              <li >
                <VerifiedUserIcon /> Frontend Developer
              </li>
              <li>
                <VerifiedUserIcon /> Backend Developer
              </li>
            </ul>
          </div>
        </Box>
      </Container>
    </React.Fragment>
  );
}
