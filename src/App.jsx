import './App.css';
import Layout from './Layout/MainLayout';
// import Usestate from './Pages/Usestate'
import Useeffect from './Pages/Useeffect'; 


function App() {
  return (
    <>
    <Layout content={<Useeffect/>}/>
    </>
  );
}

export default App;
