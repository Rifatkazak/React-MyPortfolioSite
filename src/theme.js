import { createTheme } from '@mui/material/styles';
const theme = createTheme({
    palette : {
        primary : {
            main:"#f7f7f7"
        },
        background : {
            default : "#fff" 
        },
        typography:{
            body1: {
              fontWeight: 500,
              fontSize: 12,
            },
        }
    }
})
export default theme ;