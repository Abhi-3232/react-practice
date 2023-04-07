import { useState } from 'react';
// import CardButton from '../Components/Button';
import {Box,Typography,styled,Switch,FormControlLabel,Button} from '@mui/material';
// import PriceBox from '../Components/PriceComponent';
import PriceContent from '../Components/PriceContent';

const Container = styled(Box)({
        width:"100%",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        paddingTop:"5%",
        alignItems:"center",
        backgroundColor:"#f2f2f3",
        paddingBottom:"5%"
})

const MainContainer = styled(Box)({
        height:"100%",
        width:"70%",
        textAlign:"center",
})

const SwitchBox = styled(Box)({
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        margin:"25px"
})


const Containt = styled(Box)({
        width:"100%",
        height:"100%",
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

  const array = [{price:"Free", number:0, ButtonP:"", color:"error", title:"Start Free", features:["1 User Account","1 User Account","1 User Account","1 User Account","1 User Account","1 User Account"]}, 
                 {price:"Pro", number:17, ButtonP:"Lorem, ipsum dolor.", color:"warning", title:"Start Pro", features:["1 User Account","1 User Account","1 User Account","1 User Account","1 User Account","1 User Account"]},
                 {price:"Corporate", number:75, ButtonP:"Lorem, ipsum dolor.", color:"primary", title:"Start Corporate", features:["1 User Account","1 User Account","1 User Account","1 User Account","1 User Account","1 User Account"]}]

function PricePage(){
  const [count, increase] = useState(1);
  const [value1, incnum1] = useState(array[0].number);
  const [value2, incnum2] = useState(array[1].number);
  const [value3, incnum3] = useState(array[2].number);

function increament(){
  incnum1(0); 
  incnum2(5); 
  incnum3(17); 
}
            return(
                <>
                <Container>
                <MainContainer>

                    <Typography variant='h4' sx={{marginBottom:"2%"}}>Unlimited polls, surveys, quizzes, responses and votes.</Typography>
                    <Typography variant='Body1'>There are no limites on the amount of content you can create, or data you can collect</Typography>

                    <SwitchBox>
                       <Typography sx={{marginRight:"20px"}}>BILLED-MONTHLY</Typography> 
                       <FormControlLabel control={<IOSSwitch defaultChecked onClick={increament}/>}/>
                       <Typography>BILLED-YEAR</Typography> 
                    </SwitchBox>

                    <Containt>
                        {array.map((x,index)=>{return <PriceContent price={x.price} number={index===0?value1:index===1?value2:value3} ButtonP={x.ButtonP} color={x.color} title={x.title} features={x.features}/>})}
                    </Containt>

                    <Typography variant='body1' sx={{marginTop:"5%"}}>{count}</Typography>
                    <Button onClick={() => increase(count+1)}>Like</Button>
                    
                </MainContainer>
                </Container>
                </>
            )
}

export default PricePage;