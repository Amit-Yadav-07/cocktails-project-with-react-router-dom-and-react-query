import React from 'react';
import { useRouteError, Link } from 'react-router-dom';
import ErrorImg from '../assets/404-img.svg'


function Error() {
  const error = useRouteError();

  if (error.status === 404) {
    return <div className='error-container'>
      <img src={ErrorImg} alt="page not found" />
      <h4>Ohh !</h4>
      <p>we can't seem to find page you are looking for</p>
      <Link style={{ color: '#10b981', textDecoration: 'none' }} to={'/'}>back Home</Link>
    </div>
  }

  return (

    <div className='Error'>
      <h3>Something went wrong...</h3>
    </div>
  )
}

export default Error