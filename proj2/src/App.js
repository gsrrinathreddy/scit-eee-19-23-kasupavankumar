import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Aboutus  from './pages/Aboutus';
import Skills from './pages/Skills';
import Hobbies from './pages/Hobbies';
import Qualifications from './pages/Qualifications';
import Experience from './pages/Experience';
import Certifications from './pages/Certifications';
import Contactme from './pages/Contactme';
import Workshops from './pages/Workshops';
import Projects from './pages/Projects';
import './App.css';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path ="Aboutus" element={<Aboutus/>}/>
      <Route path ="Skills" element={<Skills/>}/>
      <Route path ="Experience" element={<Experience/>}/>
      <Route path ="Hobbies" element={<Hobbies/>}/>
      <Route path  ="Qualifications" element={<Qualifications/>}/>
      <Route path  ="Certifications" element={<Certifications/>}/>
      <Route path  ="Contactme" element={<Contactme/>}/>
      <Route path  ="Workshops" element={<Workshops/>}/>
      <Route path  ="Projects" element={<Projects/>}/>
       </Routes>
        </BrowserRouter>
     
    </div>
  );
}

export default App;
