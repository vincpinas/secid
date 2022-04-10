import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';
import RotatingWords from '../../Components/RotatingWords/RotatingWords';

import heroTop from '../../Assets/home/hero-top.svg';
import heroBottom from '../../Assets/home/hero-bottom.svg';
import mixedWaveSeperator from '../../Assets/home/mixed-wave-seperator1.svg';
import bottomWave from '../../Assets/home/bottom-wave.svg';

function Home() {
  const wordsList = ['secure', 'protect', 'contain', 'manage']

  return (
    <div className='homeContainer'>
      <section className='homeHero'>
        <div className='heroWrapper'>
          <div className='heroText'>
            <h1 className='D-deskOnly'>We <RotatingWords wordsList={wordsList} duration={5} /> <br /> your passwords</h1>
            <h1 className='D-tabletDown'>We {wordsList[0]} your passwords.</h1>
            <h3><br />We keep all your passwords <br /> managable and safe, plus it's all free!</h3>
          </div>
          <div className='heroImages'>
            <img src={heroBottom} alt='hero bottom layer' />
            <img src={heroTop} id='heroTopImg' alt='hero top layer' />
          </div>
        </div>
        <img id='mixedWaveSeperator' src={mixedWaveSeperator} alt='' />
      </section>
      <section className='homeAbout'>
        <h1>What we have to offer</h1>
        <ul>
          <li>
            <h2>Secure</h2>
            <p>We make use of the most recent security measures. Safegaurding all the data you choose to store with us, so you can feel secure making use of our services.</p>
          </li>
          <li>
            <h2>Contain</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero eaque ipsa dicta autem cum repudiandae ad voluptas.</p>
          </li>
          <li>
            <h2>Manage</h2>
            <p>Keep all your passwords safely and securely in one easy to access place. Where you can easily add, remove, update and otherwise manage all your online identification.</p>
          </li>
        </ul>
        <Link to='/register'>Join us now</Link>
      </section>
      <img id='bottomWave' src={bottomWave} alt='' />
    </div>
  )
}

export default Home;
