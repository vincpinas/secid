import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';
import * as Bs from 'react-icons/bs';
import AnimatedLogo from '../AnimatedLogo/AnimatedLogo';

function Footer() {
  return (
    <footer>
      <div>
        <h3>
          We work with ambitious brands and people. <br /> Let's build something awesome together.
        </h3>
      </div>
      <hr />
      <ul className='socialsBar'>
        <li>
          <a href='https://nl.Linkedin.com/in/vincep001' target="_blank" rel="noreferrer"><Bs.BsLinkedin /></a>
        </li>
        <li>
          <a href='http://30472.hosts1.ma-cloud.nl/portfolio/' target="_blank" rel="noreferrer"><Bs.BsGearFill /></a>
        </li>
        <li>
          <a href='tel:+31682794205' rel="noreferrer">+31 (0)6 82 749 205</a>
        </li>
        <li>
          <a href='mailto:info@secid.io' rel="noreferrer">info@secid.io</a>
        </li>
        <li id='footerLogo'>
          <Link to='/'><AnimatedLogo /></Link>
        </li>
      </ul>
    </footer>
  )
}

export default Footer