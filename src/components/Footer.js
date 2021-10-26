import { CopyAllSharp } from '@mui/icons-material'
import React from 'react'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  footer :{
    textAlign : "center"
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
