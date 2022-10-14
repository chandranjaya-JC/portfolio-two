import React from 'react';
import "./about.css";
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolder} from 'react-icons/vsc';

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="About Imagee" />
          </div>
        </div>
        <div className='about__content'>
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ years Work</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>--</small>
            </article>

            <article className='about__card'>
              <VscFolder className='about__icon'/>
              <h5>Projects</h5>
              <small>1+ projects worked</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, porro quae. Magni laborum deleniti dignissimos distinctio repellendus architecto neque fuga temporibus culpa inventore. Saepe dicta suscipit esse expedita tempore praesentium.
          </p>
          <a href="#contact" className='btn'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About