import './App.css';
import Layout from './Layout/MainLayout';
import Usestate from './Pages/Usestate'
// import Useeffect from './Pages/Useeffect';
// import Contact from './Pages/Contact';

function App() {
  return (
    <>
    <Layout content={<Usestate/>}/>
    </>
  );
}

export default App;
