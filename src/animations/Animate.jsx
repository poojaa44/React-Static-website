import React from 'react'

import {useEffect} from "react";
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

const Animate = () => {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
  <div>{Animate}</div>
  );
}

export default Animate