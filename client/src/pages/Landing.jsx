import React from 'react'
import styled from "styled-components";
import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/main.svg'

import { Link } from 'react-router-dom';
import { Logo } from '../components';
                     
              
const Landing = () => {
  return (<Wrapper>       
   <nav>
    <Logo/>
   </nav>
   <div className='container page'>
    <div className='info'>
      <h1>
        job<span>tracking</span>app
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla deserunt ducimus voluptate totam magnam non pariatur expedita eaque error, ex debitis? Veritatis recusandae laudantium corrupti excepturi necessitatibus culpa quisquam illo?
      </p>
      <Link to="/register" className='btn register-link'>Register</Link>
      <Link to="/login" className='btn' >
        Login / Demo User
      </Link>
    </div>
    <img src={main} alt='job hunt' className='img main-img'/>
   </div>
    
  </Wrapper>      
  );       
};  
                
export default Landing
