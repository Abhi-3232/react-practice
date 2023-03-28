import {Box,Link,styled} from '@mui/material'

function Sidebar(){

    const SideNav = styled(Box)({
        height: "100%",
        width: "15%",
        backgroundColor: "grey",
        display: "flex",
        flexDirection: "column",
        padding:"10px",
    })

    const Navlink = styled(Link)({
        color:"black",
        textDecoration:"none"
    })

    return(
        <SideNav>
            <Navlink variant='body1'>Sidebar</Navlink>
            <Navlink variant='body1'>Sidebar</Navlink>
            <Navlink variant='body1'>Sidebar</Navlink>
            <Navlink variant='body1'>Sidebar</Navlink>
            <Navlink variant='body1'>Sidebar</Navlink>
            <Navlink variant='body1'>Sidebar</Navlink>
        </SideNav>
    )
}

export default Sidebar;