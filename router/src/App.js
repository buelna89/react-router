import { Route, Routes } from 'react-router-dom'
import './App.css' 
import Home from "./pages/Home";
import About from './pages/About'
import Contact from './pages/Contact'
import Header from './components/Header'
import NavBar from './components/NavBar';

function App() {
  return (
    <div className='MyRoutes'>
    <Routes>
      <Route path='/' element={ <NavBar/> }></Route>
      <Route path="/home" element={<Home/>}/>
      <Route path='/about' element={ <About/>}></Route>
      <Route path='/contact' element={ <Contact/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
