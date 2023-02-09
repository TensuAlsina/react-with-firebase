import {BrowserRouter as Router,Routes,Route} from "react-router-dom";  
import Navbar from "./components/navbar";
import Home from './pages/Home/home';
import Login from "./pages/Login/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
