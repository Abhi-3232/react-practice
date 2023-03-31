import './App.css';
// import Contact from './Pages/Contact';
import Layout from './Layout/MainLayout';
// import Post from './Pages/Post'
import PricePage from './Pages/PricePage'

function App() {
  return (
    <>
    <Layout PricePage={<PricePage/>}/>
    </>
  );
}

export default App;
