import React from 'react'

function isLoggedIn() {

  let token = localStorage.getItem('jwt-token')
  
  if (token) {
      return true
  } else {
    return false
    }

}

export default isLoggedIn