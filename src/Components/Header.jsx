import {Link,styled,Box,Typography,TextField} from '@mui/material';

const Navigation = styled(Box)({
    display: "flex",
    alignItems: "center",
    height: "60px",
    backgroundColor: "#007FFF",
    color: "white",
    width: "100%",
    position:"sticky",
    top:"0"
})

const NavLogo = styled(Box)({
    paddingLeft: "5%",
    width: "20%",
    marginRight: "0"
})

const NavLink = styled(Box)({
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "70%",
    paddingLeft: "20%"
})

const Links = styled(Link)({
    color: "white",
    paddingRight: "15px"
})

const Logo = styled(Typography)({
    color:"White",
    marginRight: "15%"
})

const TextF = styled(TextField)({
    backgroundColor: "white",
    padding: "0px"
})

function Header() {
    return (
      <>
      <Navigation>
      <NavLogo>
        <Logo href='' underline='none' className='links heading' variant='h5'>Technology</Logo>
      </NavLogo>
      <NavLink>
        <Links href='' underline='none' className='links' variant='body1'>Home</Links>
        <Links href='' underline='none' className='links' variant='body1'>About</Links>
        <Links href='' underline='none' className='links' variant='body1'>Services</Links>
        <Links href='' underline='none' className='links' variant='body1'>More</Links>
        <TextF className='textfield' label="Search" variant='outlined' size='small' sx={{padding:"0px"}}/>
      </NavLink>
      </Navigation>
      </>
    );
  }
  
  export default Header;