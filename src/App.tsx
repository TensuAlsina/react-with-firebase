import {BrowserRouter as Router,Routes,Route} from "react-router-dom";  
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Navbar from "./components/navbar"
import {CreatePost} from "./pages/create-post/createpost";

function App() {
  return (
    <div className="">
       <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/createpost" element={<CreatePost/>}/>
        </Routes>
       </Router>
    </div>
  );
}

export default App;
