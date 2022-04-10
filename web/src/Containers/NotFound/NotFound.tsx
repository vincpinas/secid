import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.scss';

function NotFound() {
  return (
    <div id='notFoundContainer'>
      <div className='notFoundCard'>
        <h2>404 - Nothing here!</h2>
        <p>
          The page you were looking for could unfortunately not be found.. <br/>
          You can try going back to the home page and look for something else :)
        </p>
        <Link to='/'>Home</Link>
      </div>
    </div>
  )
}

export default NotFound