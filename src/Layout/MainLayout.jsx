import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import { Box, styled } from '@mui/material';

const MainContent = styled(Box)({
    // backgroundColor:"blue",
    width:"80%",
    height:"calc(100% - 90px)",
    overflow:"auto",
    padding : "1%",
    position:"fixed",
    bottom:"0",
    right:"0"
});

const MainContainer = styled(Box)({
    width:"100%",
    height:"100%"
});

function Layout(props){
    return(
        <MainContainer>
            <Header/>
            <Sidebar/>
            <MainContent>
                {props.content}
            </MainContent>
        </MainContainer>
    )
}

export default Layout