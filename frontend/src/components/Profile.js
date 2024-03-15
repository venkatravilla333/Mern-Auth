import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Profile() {
  var [data, setData] = useState('')
  
  let token = localStorage.getItem('jwt-token')
  console.log(token)
  
  var navigate = useNavigate()

  useEffect(() => {
    axios.get('http://localhost:5000/profile', {
      headers: {
      'myToken': token
      }
    })
      .then((res) => {
       setData(res.data)
      console.log(res.data)
    })
      .catch((err) => {
      console.log(err)
    })
  },[token])
 
  let logout = () => {
   localStorage.removeItem('jwt-token');
    navigate('/home')
}
  return (
    <div className='bg-dark text-white vh-100 pt-5'>
        <h2 className='text-center pt-2'>Profile</h2>
      <div className='row pt-4'>
        <div className='col-6 m-auto bg-warning p-4 text-dark fs-3 fw-medium rounded'>
          <p>Name : {data.username}</p>
          <p>Email : {data.email}</p>
        </div>

      </div>
        <button onClick={logout} className='btn btn-danger fw-bold' style={{marginLeft:'530px', marginTop:'50px', width:'200px'}}>Logout</button>
    </div>
  )
}

export default Profile