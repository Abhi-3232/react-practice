import {Box,styled,Typography} from '@mui/material'
import { height } from '@mui/system'
import CardButton from '../Components/Button'

const Container = styled(Box)({
        // width:"30%",
        // height:"100%",
        // backgroundColor:"white",
        // display:"flex",
        // justifyContent:"space-evenly",
        // marginRight:"1%",
        // alignItems:"center"
        height: "90%",
        width: "100%",
        display:"flex",
        justifyContent:"space-evenly"
})

const MicroCont = styled(Box)({
        height:"100%",
        width:"90%",
        backgroundColor:"White",
        display:"flex",
        // justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
        position:"relative",
        overflow:"hidden"
})

const ButtonCont = styled(Box)({
        height:"30%",
        width:"100%",
        // paddingTop:"10%",
        borderBottom:"1px solid #f1f1f1",
        display:"flex",
        flexDirection:"column",
        // justifyContent:"center",
        alignItems:"center",
        color:"grey"
})

const Paracont = styled(Box)({
        display:"flex",
        flexDirection:"column",
        // justifyContent:"left",
        // alignItems:"left",
        borderBottom:"1px solid #f1f1f1",
        width:"80%"
})

const Para = styled(Typography)({
        borderBottom:"1px solid #f1f1f1",
        padding:"7px",
        width:"100%",
        // height:"10px"
        textAlign:"left"

})

function PriceContent(){
    return(
        <>
        <Container>
            <MicroCont>
                <ButtonCont>
                   <CardButton/>
                   <Typography variant='Body1'>Lorem, ipsum dolor.</Typography>
                </ButtonCont>
                <Paracont>
                  <Para variant='Body1'>1 User Account</Para>
                  <Para variant='Body1'>1 User Account</Para>
                  <Para variant='Body1'>1 User Account</Para>
                  <Para variant='Body1'>1 User Account</Para>
                  <Para variant='Body1'>1 User Account</Para>
                  <Para variant='Body1'>1 User Account</Para>
                </Paracont>
            </MicroCont>
        </Container>
        </>
    )
}
export default PriceContent;