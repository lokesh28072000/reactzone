import './App.css';
import Navbarmain from './Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Contact';
import Footer from './Components/Footer';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <>

    <BrowserRouter>
    <Navbarmain/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/About' element={<About/>}/>
    <Route path='/Contact' element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  );
}

export default App;
