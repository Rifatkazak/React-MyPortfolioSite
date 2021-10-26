
import * as React from "react";
import { makeStyles } from "@mui/styles";
import CardActions from "@mui/material/CardActions";
import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import AttachmentIcon from "@mui/icons-material/Attachment";
import cv from "../assets/Rifat_Kazak_Resume.pdf"


const useStyles = makeStyles((theme) => ({
  text: {
    marginTop: "7rem",
    marginLeft: "5rem",
    order : "1",
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
    marginTop : "1rem" ,
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
    fontSize: "1.3rem",
    fontWeight : "500",
  },

}));



export default function Contacts() {
    const classes = useStyles();
    return (
        <section class="Material-contact-section section-padding section-dark mt-5">
      <div class="container mt-5">
      <br/>
      <br/>
      <br/>
          <div class="row">
              <div class="col-md-6 mt-3 contact-widget-section2 wow animated fadeInLeft" data-wow-delay=".2s">
                <h3>You can reach me when you want !</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                
                <div class="find-widget">
                 Address : <a href="#">İzmir / Menemen</a>
                </div>
                <div class="find-widget">
                  Phone           :  <a href="#">0545 478 50 90</a>
                </div>
                
                <div class="find-widget">
                  Website :  <a href="https://www.linkedin.com/in/rifat-kazak/">Linkedin Profile</a>
                </div>
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
                
              </div>
              <div class="col-md-6 wow animated fadeInRight" data-wow-delay=".2s">
                  <form class="shake" role="form" method="post" id="contactForm" name="contact-form" data-toggle="validator">
                      
                      <div class="form-group label-floating">
                        <label class="control-label" for="name">Name</label>
                        <input class="form-control" id="name" type="text" name="name" required data-error="Please enter your name" />
                        <div class="help-block with-errors"></div>
                      </div>

                      <div class="form-group label-floating">
                        <label class="control-label" for="email">Email</label>
                        <input class="form-control" id="email" type="email" name="email" required data-error="Please enter your Email" />
                        <div class="help-block with-errors"></div>
                      </div>
                      
                      <div class="form-group label-floating">
                        <label class="control-label">Subject</label>
                        <input class="form-control" id="msg_subject" type="text" name="subject" required data-error="Please enter your message subject" />
                        <div class="help-block with-errors"></div>
                      </div>
                   
                      <div class="form-group label-floating">
                          <label for="message" class="control-label">Message</label>
                          <textarea class="form-control" rows="3" id="message" name="message" required data-error="Write your message"></textarea>
                          <div class="help-block with-errors"></div>
                      </div>
                     
                      <div class="form-submit mt-5">
                          <button class="btn btn-common btn-primary" type="submit" id="form-submit"><i class="material-icons mdi mdi-message-outline"></i> Send Message</button>
                          <div id="msgSubmit" class="h3 text-center hidden"></div>
                          <div class="clearfix"></div>
                      </div>
                  </form>
              </div>
          </div>
      </div>
    </section>
    )
};