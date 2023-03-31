import { Box, styled, Typography } from "@mui/material";
// import Label from '../Components/Label';

const Container = styled(Box)({
      height: "90%",
      width: "100%",
      display:"flex",
      justifyContent:"space-evenly"
})

const Pricecomp = styled(Box)({
      height:"100%",
      width:"90%",
      backgroundColor:"White",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      flexDirection:"column",
      position:"relative",
      overflow:"hidden"
});



function PriceBox(props) {
  return (
    <>
      <Container>
        <Pricecomp>
            {/* <Label/> */}
            <Typography variant="Body1" sx={{marginBottom:"5px", fontWeight:"bold"}}>{props.price}</Typography>
            <Typography variant="h3">{props.number}</Typography>
            
        </Pricecomp>
      </Container>
    </>
  );
}

export default PriceBox;
