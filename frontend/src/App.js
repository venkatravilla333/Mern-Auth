import { Link, Route, Routes, useLocation } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Home from "./components/Home";
import PvtRoute from "./PvtRoute";
import Nav from "./components/Nav";
import isLoggedIn from "./isLoggedIn";
import Dashboard from "./components/Dashboard";


function App() {
 let location = useLocation()
  
  return (
    <div>
      {location.pathname === '/' && <Nav />}

      <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home />} />
        <Route path='' element={<PvtRoute />}>
          <Route path='profile' element={<Profile />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
        
      </Routes>
    </div>
  );
}

export default App;
