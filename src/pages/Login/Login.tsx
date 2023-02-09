import {createUserWithEmailAndPassword} from "firebase/auth";
import { auth, } from "../../config/firebase";
const Login = ()=>{

    const singUserIN=async()=>{
            try{
                 const result =   await createUserWithEmailAndPassword(auth,"rasta@gmail.com","rastaisAlwaysRasta1816")
                console.log(result.user)
            }catch(error){
                alert(error)
            }
    }

    return <div>
       <h1> This is Login Page</h1>
        <button onClick={singUserIN} className="p-2 bg-indigo-300 rounded-md ml-5">signInWithEmailPassword</button>       
    </div>
}
export default Login