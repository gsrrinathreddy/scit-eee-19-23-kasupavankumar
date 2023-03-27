import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home  from './pages/Home';
import Profile from './pages/Profile';
import Reels from './pages/Reels';
import Search from './pages/Search';
import './App.css';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path ="Home" element={<Home/>}/>
      <Route path ="Profile" element={<Profile/>}/>
      <Route path ="Reels" element={<Reels/>}/>
      <Route path  ="Search" element={<Search/>}/>
       </Routes>
        </BrowserRouter>
     
    </div>
  );
}

export default App;
