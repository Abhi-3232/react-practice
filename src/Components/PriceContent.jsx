import {Box,styled,Typography} from '@mui/material'
import CardButton from '../Components/Button'

const Container = styled(Box)({
        // width:"30%",
        height:"100%",
        // backgroundColor:"white",
        // display:"flex",
        // justifyContent:"space-evenly",
        // marginRight:"1%",
        // alignItems:"center"
        width: "100%",
        display:"flex",
        justifyContent:"space-evenly"
})

const MicroCont = styled(Box)({
        height:"75vh",
        width:"90%",
        backgroundColor:"White",
        display:"flex",
        // justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
        position:"relative",
        overflow:"hidden"
})

const Pricecomp = styled(Box)({
        height:"25%",
        width:"100%",
        backgroundColor:"White",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
        position:"relative",
        overflow:"hidden",
        // backgroundColor:"red",
        borderBottom:"12px solid #f2f2f3"
  });

const ButtonCont = styled(Box)({
        height:"21%",
        width:"100%",
        // paddingTop:"10%",
        borderBottom:"2px solid #f1f1f1",
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

function PriceContent(props){
    return(
        <>
        <Container>
            <MicroCont>
                <Pricecomp>
                   {/* <Label/> */}
                   <Typography variant="Body1" sx={{marginBottom:"5px", fontWeight:"bold",}}>{props.price}</Typography>
                   <Typography variant="h3" sx={{color:"#2f4059"}}>{props.number}$</Typography>
                </Pricecomp>
                <ButtonCont>
                   <CardButton color={props.color} title={props.title}/>
                   {/* <CardButton color={"warning"} title={"Start Pro"}/>
                   <CardButton color={"primary"} title={"Start Corporate"}/> */}
                   <Typography variant='Body1'>{props.ButtonP}</Typography>
                </ButtonCont>
                <Paracont>
                                {props.features.map((feat)=>{
                                        return <Para variant='Body1'>{feat}</Para>
                                })}
                </Paracont>
            </MicroCont>
        </Container>
        </>
    )
}
export default PriceContent;