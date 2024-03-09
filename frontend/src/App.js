import { Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Myprofile from "./components/Myprofile";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<Signup/> } />
        <Route path="/login" element={<Login/> } />
        <Route path="/profile" element={<Myprofile/> } />
     </Routes>
    </div>
  );
}

export default App;
