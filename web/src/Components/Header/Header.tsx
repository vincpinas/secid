import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Go from 'react-icons/go';
import './Header.scss';

import AnimatedLogo from '../AnimatedLogo/AnimatedLogo'

interface HeaderProps {
  user: any;
}

function Header({ user }: HeaderProps) {
  const [overlay, setOverlay] = useState<boolean>(false);
  const overlaySetter = () => setOverlay(!overlay);

  return (
    <header className='cHeader'>
      <div className={overlay ? 'menuOverlay active' : 'menuOverlay'}>
        <span><Go.GoThreeBars className='hamMenu' onClick={overlaySetter} /></span>
        {
          user.isLoggedIn ?
            <ul>
              <Link to='/passwords' onClick={overlaySetter}>Passwords </Link>
              <Link to='/account' onClick={overlaySetter}>Account</Link>
            </ul>
            :
            <ul>
              <Link to='/login' onClick={overlaySetter}>Login</Link>
              <Link to='/register' onClick={overlaySetter}>Register</Link>
            </ul>
        }
      </div>
      <Link to='/' id='headerLogo'><AnimatedLogo type='title' /></Link>
      {
        user.isLoggedIn ?
          <div className='headerLinkWrapper'>
            <Link to='/passwords'>Passwords </Link>
            <Link to='/account'>Account</Link>
          </div>
          :
          <div className='headerLinkWrapper'>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
          </div>
      }
      <Go.GoThreeBars className='hamMenu' onClick={overlaySetter} />
    </header>
  )
}

export default Header;
