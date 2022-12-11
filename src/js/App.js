import React from 'react';


import '../css/App.css';

import Main from '../components/main';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import LightBox from '../components/lightbox';

function App() {

  return (
    <div className="App">

      <Navbar/>
      
      <Main/>
      
      <Footer/>

      <LightBox/>
    
    </div>
  );
}

export default App;
