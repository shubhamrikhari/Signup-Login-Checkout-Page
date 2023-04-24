import './App.css'
import Login from './components/Login'
import Checkout from './components/Checkout'
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/checkout" element={<Checkout/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
