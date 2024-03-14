import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Myprofile() {
 var [token, setToken] = useState(null)
   setToken = window.localStorage.getItem('jwt-token')
  console.log(token)
 var navigate = useNavigate()

  useEffect(() => {
    axios.get('http://localhost:5000/profile', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
      .then((res) => {
      console.log(res.data)
    })
      .catch((err) => {
      console.log(err)
    })
  })
  if (!token) {
   return navigate('/login')
  }

  return (
    <div className='bg-dark text-white vh-100 pt-5'>
        <h2 className='text-center pt-2'>Profile</h2>
      <div className='row pt-4'>
        <div className='col-4 m-auto bg-warning p-4 text-dark fs-3 fw-medium rounded'>
        <p>Name : </p>
        <p>Email : </p>
        </div>

      </div>
        <button onClick={setToken(null)}>Logout</button>
    </div>
  )
}

export default Myprofile