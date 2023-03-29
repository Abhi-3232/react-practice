import './App.css';
import Contact from './Pages/Contact';
import Layout from './Layout/MainLayout';


function App() {
  return (
    <>
    <Layout content={<Contact/>}/>
    </>
  );
}

export default App;
