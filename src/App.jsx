import React from 'react'
import {NavBar,Main,Footer,Painter,Electrician} from "./components/index";
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div  >
      <NavBar/>
      <Routes>
          <Route path="/" element={<Main />} />
            <Route path="/main" element={<Painter/>} />
            <Route path="/painter" element={<Painter/>}/>
            <Route path="/electrician" element={<Electrician/>}/>
         
          
        </Routes>
    
      <Footer/>
    </div>
  )
}

export default App