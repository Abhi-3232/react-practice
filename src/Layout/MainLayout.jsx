import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import Contact from '../Components/Contact';
import { Box, styled } from '@mui/material';

const MainContent = styled(Box)({
    backgroundColor:"blue"
});

const MainContainer = styled(Box)({
    width:"100%",
    height:"100%"
});

function Layout(){
    return(
        <MainContainer>
            <Header/>
            <Sidebar/>
            <MainContent>
                <Contact/>
            </MainContent>
        </MainContainer>
    )
}

export default Layout