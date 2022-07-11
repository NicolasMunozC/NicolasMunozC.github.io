import React from 'react'
import navIcon1 from '../assets/img/nav-icon1.svg';
import githubIcon from '../assets/img/github.svg';
import emailIcon from '../assets/img/email-icon.svg';

function SocialBar( {contactRef, scrollToRef} ) {
  return (
    <div className='social-container'>
        <div className="social-icon">
              <a href="https://linkedin.com/in/nicolasmunozcaceres/" target={"_blank"} rel="noreferrer"><img src={navIcon1} alt="LinkedIn" /></a>
              <a href="https://github.com/NicolasMunozC/" target={"_blank"} rel="noreferrer"><img src={githubIcon} alt="Github" /></a>
              <button onClick={ () => {scrollToRef(contactRef.current, 80)}} ><img src={emailIcon} alt="Github" /></button>
        </div>
    </div>

  )
}

export default SocialBar