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
import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";

const useStyles = makeStyles((theme) => ({
  text: {
    marginTop: "7rem",
    marginLeft: "5rem",
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
  }
}));

export default function Home() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        maxWidth="xl"
        sx={{ display: "flex" }}
      >
        <Card sx={{ maxWidth: 345 }} className={classes.card}>
          <Avatar
            className={classes.avatar}
            alt="Esat Yasar"
            src={profile}
            sx={{ width: 300, height: 300 }}
          />
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="div">
              Esat Yasar
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Full Stack Developer
            </Typography>
          </CardContent>
          <CardActions className={classes.icons}>
            <a href="mailto:esatyasar91@email.com" className={classes.link}>
              <MailIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/esat-yasar/"
              className={classes.link}
            >
              <LinkedInIcon />
            </a>
            <a href="https://github.com/esatyasar" className={classes.link}>
              <GitHubIcon />
            </a>
            <NavLink to="/Resume" className={classes.link}>
              <AttachmentIcon />
            </NavLink>
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
          <Typography variant="h2" gutterBottom component="div">
            Biograpghy
          </Typography>
          <Typography variant="body1" gutterBottom>
            Hi, I’m Man Parvesh, currently working as a Software Engineer
            (Member of Technical Staff) at VMware in the SRE Automation Platform
            team. I have a Master’s degree in CS from UT Dallas and a Bachelor
            of Technology degree from the Indian Institute of Technology (IIT)
            Guwahati. Previously, I worked at Works Applications, Singapore as a
            Software Engineer, where I worked on delivering libraries,
            microservices and distributed multi-tenant architecture to thousands
            of developers inside the company who utilized them to build various
            products for our customers. Aside from work, I am also an
            open-source enthusiast and have created projects that were listed in
            GitHub trending. My interests lie in solving problems related to
            large-scale distributed software systems.
          </Typography>
          <div className={classes.subtitles}>
            <ul>
              <Typography variant="h5" gutterBottom component="div">
                    Interests
              </Typography>
              <li>Distributed Computing</li>
              <li>Cloud Computing</li>
              <li>Software Engineering</li>
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
