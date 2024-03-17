import React, { useEffect } from 'react'
import isLoggedIn from './isLoggedIn'
import { Navigate, Outlet} from 'react-router-dom'

function PvtRoute() {
 
  return isLoggedIn() ? <Outlet/>:<Navigate to='/login'/>
}

export default PvtRoute