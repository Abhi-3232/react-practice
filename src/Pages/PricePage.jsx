// import CardButton from '../Components/Button';
import {Box,Typography,styled,Switch,FormControlLabel} from '@mui/material';
import PriceBox from '../Components/PriceComponent';
import PriceContent from '../Components/PriceContent';

const Container = styled(Box)({
        height:"100%",
        width:"100%",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        paddingTop:"5%",
        alignItems:"center",
        backgroundColor:"#f2f2f3"
})

const MainContainer = styled(Box)({
        height:"100%",
        width:"70%",
        textAlign:"center",
        // paddingX:"5%"
})

const SwitchBox = styled(Box)({
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        margin:"25px"
})

const PriceBoxContainer = styled(Box)({
        width:"100%",
        display:"flex",
        justifyContent:"space-evenly",
        height:"25%",
})

const Containt = styled(Box)({
        width:"100%",
        height:"50%",
        display:"flex",
        justifyContent:"space-evenly",
})

const IOSSwitch = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
  ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 2,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(16px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          backgroundColor: theme.palette.mode === 'dark' ? '#f50057' : '#f50057',
          opacity: 1,
          border: 0,
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
        },
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: '#33cf4d',
        border: '6px solid #fff',
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color:
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
      },
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 22,
      height: 22,
    },
    '& .MuiSwitch-track': {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: 500,
      }),
    },
  }));

function PricePage(){
            return(
                <>
                <Container>
                <MainContainer>

                    <Typography variant='h4' sx={{marginBottom:"2%"}}>Unlimited polls, surveys, quizzes, responses and votes.</Typography>
                    <Typography variant='Body1'>There are no limites on the amount of content you can create, or data you can collect</Typography>

                    <SwitchBox>
                       <Typography sx={{marginRight:"20px"}}>BILLED-MONTHLY</Typography> 
                       <FormControlLabel control={<IOSSwitch defaultChecked />}/>
                       <Typography>BILLED-YEAR</Typography> 
                    </SwitchBox>

                    <PriceBoxContainer>
                        <PriceBox price={"Free"} number={"0$"}/>
                        <PriceBox price={"Pro"} number={"17$"}/>
                        <PriceBox price={"Corporate"} number={"75$"}/>
                    </PriceBoxContainer>

                    <Containt>
                        <PriceContent/>
                        <PriceContent/>
                        <PriceContent/>
                    </Containt>
                    
                </MainContainer>
                </Container>
                {/* <CardButton color={"error"}/> */}
                </>
            )
}

export default PricePage;