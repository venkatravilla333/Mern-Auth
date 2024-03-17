import React from 'react'
import { Link } from 'react-router-dom';

function Nav() {
  return (
   
        <div className='d-flex justify-content-end bg-dark'>
          <Link
            to='/signup'
            style={{
              margin: '20px',
              textDecoration: 'none',
              fontSize: '20px',
              fontWeight: 'bold',
            }}
          >
            Signup
          </Link>
          <Link
            to='/login'
            style={{
              margin: '20px',
              textDecoration: 'none',
              fontSize: '20px',
              fontWeight: 'bold',
            }}
          >
            Login
          </Link>
        </div>
  );
}

export default Nav