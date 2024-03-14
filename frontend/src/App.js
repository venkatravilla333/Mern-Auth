import { Link, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Myprofile from "./components/Myprofile";


function App() {
  return (
    <div>
      <div style={{background:'black', height:'40px'}}>
        <Link
          to='/signup'
          style={{ margin: '20px', textDecoration: 'none', fontSize: '20px' , fontWeight:'bold'}}
        >
          Signup
        </Link>
        <Link
          to='/login'
          style={{ margin: '20px', textDecoration: 'none', fontSize: '20px', fontWeight:'bold'}}
        >
          Login
        </Link>
      </div>
      <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Myprofile />} />
      </Routes>
    </div>
  );
}

export default App;
