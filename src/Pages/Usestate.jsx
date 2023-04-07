import {useState} from 'react';
import { Typography,styled,Box } from '@mui/material';
import Button from '../Components/Button';

const Container = styled(Box)({
    display:"flex",
    flexDirection:"column",
    width:"100%",
    height:"50vh",
    justifyContent:"center",
    alignItems:"center"
})

const MicroCont = styled(Box)({
    display:"flex",
    flexDirection:"row"
})

function Usestate(){

    const [name, changeName] = useState("Click Name");
    const Object = {Abhishek : {name:"Abhishek", Age: 22, Profile:"React Developer"}, 
                    Keshav:{name:"Keshav", Age: 22, Profile:"Full Stack Developer"},
                    Nikhil:{name:"Nikhil", Age: 24, Profile:"Nodejs Developer"},
                    Ranjeet:{name:"Ranjeet v", Age: 24, Profile:"Front End Developer"}
                }
    
    return(
        <>
        <Container>
            <Typography variant='h4'>{Object[name]?.name}</Typography>
            <Typography variant='h4'>{Object[name]?.Age}</Typography>
            <Typography variant='h4'>{Object[name]?.Profile}</Typography>
        <MicroCont>
            <Button title={"Abhishek"} onClick={() => changeName("Abhishek")}/>
            <Button title={"Keshav"} onClick={()=> changeName("Keshav")}/>
            <Button title={"Nikhil"} onClick={()=> changeName("Nikhil")}/>
            <Button title={"Ranjeet"} onClick={()=> changeName("Ranjeet")}/>
        </MicroCont> 
        </Container>
        </>
    )
}                                                                                                                                               

export default Usestate;