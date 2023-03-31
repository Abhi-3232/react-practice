import {Button} from '@mui/material/';

function CardButton(props){

    return(
        <>
        <Button variant="contained" color={props.color} sx={{width:"40%", margin:"15px"}}>Button</Button>
        </>
    )
}

export default CardButton;