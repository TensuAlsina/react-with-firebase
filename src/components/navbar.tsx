import {Link} from "react-router-dom";
import Logo from "../assets/images/blog.jpg";
const Navbar = ()=>{
    return (
    <div className="uppercase flex space-x-3 w-full bg-teal-300 p-6 justify-center">
        <div>
            <img src={Logo} alt="" />
        </div>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
    </div>
    )
}

export default Navbar