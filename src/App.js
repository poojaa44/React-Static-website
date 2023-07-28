
import{Blog, Footer,Possibility,Features,WhatGPT3,Header} from './container'
import {Brand, CTA, Navbar } from "./components/index";
import'./App.css';

import {useEffect} from "react";
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';



function App() {

  useEffect(() => {
    AOS.init({
    
      duration: 1400,
      easing: 'ease-in-out',
      delay: 400,
    });
  }, [])


  return (
    <div className="App">
        <div className='gradient__bg' >
          <Navbar/>
          <Header/>
        </div>
        <Brand/>
        <WhatGPT3/>
        <Features/>
        <Possibility/>
        <CTA/>
        <Blog/>
        <Footer/>
    </div>
  );
}

export default App;
