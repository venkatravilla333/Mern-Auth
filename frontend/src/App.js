import { Link, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Home from "./components/Home";

var token = localStorage.getItem('jwt-token')

function App() {
  
  return (
    <div>
      
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
      
      <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
