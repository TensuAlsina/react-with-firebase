import {signInWithPopup} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../../config/firebase";


const Login = ()=>{
    const navigate = useNavigate();
    const signUserIn = async() =>{
      await   signInWithPopup(auth,provider).then((result)=>{
            alert(result.user.phoneNumber)
            navigate("/")
            
        }).catch((err)=>{
            alert(err)
        })
    }

    return <div className="mt-2 items-center">
        <h2>Sign In With Google To Continue</h2>
            <button onClick={signUserIn} className="bg-blue-400 p-2 rounded-md ml-2">SignInWithGoogle</button>
         </div>
}

export default Login;