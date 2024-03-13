import axios from 'axios'
import React from 'react'

function Myprofile() {
  let jwtToken = window.localStorage.getItem('jwt-token')
  console.log(jwtToken)

  axios.get('http://localhost:5000/profile', {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jwtToken}`
    }
  })
  .then(()=>{})
  .catch(()=>{})

  return (
    <div className='bg-dark text-white vh-100 pt-5'>
        <h2 className='text-center pt-2'>Profile</h2>
      <div className='row pt-4'>
        <div className='col-4 m-auto bg-warning p-4 text-dark fs-3 fw-medium rounded'>
        <p>Name : Prasad</p>
        <p>Email : Prasad@gmail.com</p>
        </div>

      </div>
    </div>
  )
}

export default Myprofile