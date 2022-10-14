import React from 'react';
import './footer.css';
import {BsInstagram} from 'react-icons/bs';
import {FaTwitterSquare} from 'react-icons/fa';
import {AiFillFacebook} from 'react-icons/ai';


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>JC</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about"></a>About</li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__social">
        <a href="https://facebook.com"><AiFillFacebook /></a>
        <a href="https://Instagram.com"><BsInstagram /></a>
        <a href="https://twitter.com"><FaTwitterSquare /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; JCWEBPLOT. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer;