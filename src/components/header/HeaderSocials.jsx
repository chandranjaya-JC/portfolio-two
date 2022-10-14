import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithubSquare, FaFacebookSquare, FaLinkedin} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target="blank"><FaLinkedin /></a>
        <a href="https://github.com" target="blank"><FaGithubSquare /></a>
        <a href="https://facebook.com" target="blank"><FaFacebookSquare /></a>

    </div>
  )
}

export default HeaderSocials