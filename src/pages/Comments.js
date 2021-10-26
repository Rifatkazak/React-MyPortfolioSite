import React,{useState} from 'react'
import { Button } from '@mui/material'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import styles from "./style.module.css"
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';


function Comments() {
    const initialValues = {
        
    }
    const [data, setData] = useState([{id :0, name : "Rifat", content : "He is a good developer"}, {id :1, name : "mark", content : "He is so helpful.."}])
    const [counter,setCounter] = useState(1)
    
    const [comments, setComments] = useState({id :counter, name : "", content : ""})

    const commentsHandler = (e) => {
        e.preventDefault()
        setCounter(counter+1)
        setComments({...comments, id:counter})
        setData([...data, comments])
    }
    const deleteHandler = (id) => {
        const filtered = data.filter((item) => {
            return (item.id !== id)
        })
        setData(filtered)
    }
    return (
        <div className="comments">
            <div className={styles.container}>
                <h3 className={styles.title}> Your feedback is my Plessure</h3>
                <TextField
                    className={styles.nameTextfield}
                    id="outlined-textarea"
                    label="Your Name"
                    placeholder="Who are you"
                    value={comments.name}
                    multiline
                    onChange={(e) => setComments({...comments , name : e.target.value})}
        />
                <TextField
                className = {styles.commentTextfield}
                    id="filled-multiline-flexible"
                    label="Add your Comment"
                    multiline
                    maxRows={20}
                    value={comments.content}
                    onChange={(e) => setComments({...comments , content : e.target.value})}
                    />
                <input type="submit"
                 className={styles.commentsBtn} 
                 value="Add Comment"
                 onClick={commentsHandler}
                 /> 
            </div>
            <Card sx={{ minWidth: 275 }}>{data.map((item) => {
                return (
                <CardContent key={item.id} className = {styles.contentCard}>
                    <Typography variant="h5" component="div">
                         {item.name}
                    </Typography>
                    <Typography variant="body2">
                        {item.content}
                    </Typography>
                    <CardActions>
                        <input type="submit"
                        value="Delete"
                        className={styles.commentsBtn}
                        onClick= {() => deleteHandler(item.id)}/>
                    </CardActions>
                    <hr/>
                </CardContent>
                )
            })}
                

            </Card>
        </div>
    )
}

export default Comments
