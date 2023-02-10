 
import {Link} from "react-router-dom";
import { auth } from "../config/firebase";
import {useAuthState} from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const Navbar = () =>{
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const signUserOut =async ()=>{
        await signOut(auth)
        navigate("/login")
    }
    return <div className="flex justify-end bg-blue-600 items-center text-white py-10 pr-16 space-x-3">
        <Link className="text-3xl" to="/">Home</Link>
        {
            !user ? <Link className="text-3xl" to="/login">Login</Link> : <Link className="text-3xl" to="/createpost">Create Post</Link> 
        }
        {user && (
           <>
            <div className="flex justify-center items-center text-lg space-x-3">
            <p>{user?.displayName}</p>
            <img src={user?.photoURL || ""} width="30" height="30" alt="" className="rounded-lg" />
        </div>
        <button onClick={signUserOut}>Log_Out</button>
           </>
        )}
    </div>
}
export default Navbar