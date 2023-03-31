import {Box,styled,Typography} from '@mui/material';

const LabelCont = styled(Box)({
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:"20px",
        width:"70%",
        backgroundColor:"red",
        position:"absolute",
        top:"1",
        right:"0",
        rotate:"45deg"
})

function Label(){
    return(
        <>
        <LabelCont>
            <Typography variant='Body1' sx={{fontSize:"12px", color:"white"}}>43% Discount</Typography>
        </LabelCont>
        </>
    )
}

export default Label;