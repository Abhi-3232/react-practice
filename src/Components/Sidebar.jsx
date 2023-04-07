import {Box,Link,styled} from '@mui/material'

function Sidebar(){

    const SideNav = styled(Box)({
        height: "100%",
        width: "15%",
        backgroundColor: "#98c1d9",
        display: "flex",
        flexDirection: "column",
        padding:"10px",
        position:"fixed",
        top:"60px",
        left:"0",
    })

    const Navlink = styled(Link)({
        color:"black",
        textDecoration:"none",
        paddingLeft:"5%"
    })

    return(
        <SideNav>
            <Navlink variant='body1'>Content</Navlink>
            <Navlink variant='body1'>Links</Navlink>
            <Navlink variant='body1'>Cards</Navlink>
            <Navlink variant='body1'>About</Navlink>
            <Navlink variant='body1'>Services</Navlink>
            <Navlink variant='body1'>More</Navlink>
        </SideNav>
    )
}

export default Sidebar;