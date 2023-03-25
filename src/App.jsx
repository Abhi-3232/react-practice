import logo from './logo.svg';
import './App.css';
import { Box,Typography,Link,TextField } from '@mui/material';
import Contact from './Components/Contact';

function App() {
  return (
    <Box className="navigation">
    <Box className="nav-logo">
      <Typography variant='h5'><Link href='' underline='none' className='links heading'>Technology</Link></Typography>
    </Box>
    <Box className="navlinks">
      <Link href='' underline='none' className='links' variant='body1'>Home</Link>
      <Link href='' underline='none' className='links' variant='body1'>About</Link>
      <Link href='' underline='none' className='links' variant='body1'>Services</Link>
      <Link href='' underline='none' className='links' variant='body1'>More</Link>
      <TextField className='textfield' label="Search" variant='outlined' size='small' sx={{padding:"0px"}}/>
    </Box>
    <Contact/>
    </Box>
  );
}

export default App;
