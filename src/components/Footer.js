
import React from 'react'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  footer :{
      textAlign : "center",
    marginTop: "3rem",
    padding: "1rem",
    backgroundColor: "#F7F7F7F7",
    opacity :"0.8",
    position: "fixed",
    bottom: "0",
    left: "0",
    width: "100%"
    
}
}));

function Footer() {
    const classes = useStyles();
    const year = new Date()
    return (
        <div className = {classes.footer}>
            <p> Copyright &copy; {year.getFullYear()} Rifat KAZAK</p>
        </div>
    )
}

export default Footer