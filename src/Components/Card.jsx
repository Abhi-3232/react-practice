import {Card,CardMedia,CardContent,Typography,CardActions,Button} from '@mui/material';
import { useEffect } from 'react';

function PostCard(props){

    return(
        <>
        <Card sx={{maxWidth:"32%", margin:"5px"}}>

            <CardMedia sx={{height:140}} image={props.imageURL} title="Demo Image"/>
            <CardContent>

            <Typography gutterBottom variant="h5" component="div">
             {props.title}</Typography>

            <Typography variant="body2" color="text.secondary">
            {props.description}</Typography>

            </CardContent>

            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
        </>
    );
}

export default PostCard;