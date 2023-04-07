import {Button} from '@mui/material/';

function CardButton(props){

    return(
        <>
        <Button variant="contained" onClick={props.onClick} color={props.color} sx={{width:"auto", margin:"15px", borderRadius:"0px"}}>{props.title}</Button>
        </>
    )
}

export default CardButton;