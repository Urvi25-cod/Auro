import React from 'react';
import { BrowserRouter as  Router ,Routes, Route} from 'react-router-dom';
import Header from './Component/Header'
import Footer from './Component/Footer';
import Home from './Component/Home';
// import { Route, Router, Routes } from 'react-router-dom';
import Abots from './Component/Abots';
import ContactForm from './Component/ContactForm';
import HairGrowth from './Component/HairGrowth';
// import HairGrowthInfo from './Component/HairGrowthInfo';
// import GetInTouchForm from './Component/GetInTouchForm';
import Skin from './Component/Skin';
import HairLoss from './Component/HairLoss';
import Male from './Component/Male';
// import Abc from './Component/Abc';
import Femal from './Component/Femal';
import Dandruff from './Component/Dandruff';
import Alopecia from './Component/Alopecia';
import Abc from './Component/Abc';




function App() {

  return (
    <>
     
      
      <Router>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Abots' element={<Abots/>}></Route>
          <Route path='/ContactForm' element={<ContactForm/>}></Route>
          <Route path='/HairGrowth' element={<HairGrowth/>}></Route>
          <Route path='/Skin' element={<Skin/>}></Route>
          <Route path='/HairLoss' element={<HairLoss/>}></Route>
          <Route path='/Male' element={<Male/>}></Route>
          <Route path='/Femal' element={<Femal/>}></Route>
          <Route path='/Alopecia' element={<Alopecia/>}></Route>
          <Route path='/Dandruff' element={<Dandruff/>}></Route>
          <Route path='/Abc' element={<Abc/>}></Route>
        </Routes>
       {/* <HairGrowthInfo/>  */}
        <Footer/>
        {/* <Abc/> */}
        {/* <GetInTouchForm/> */}
      </Router>
      
    </>
)}

export default App;
