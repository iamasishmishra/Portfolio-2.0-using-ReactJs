import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/asish-kumar-mishra-59777b250/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/iamasishmishra" target="_blank" rel="noreferrer" ><FaGithub /></a>
    </div>
  )
}

export default HeaderSocials