import {addDoc,collection } from "firebase/firestore";
import { db } from "../../config/firebase";
const Home = ()=>{
    const postRef = collection(db,"posts")
    const checkPost = async ()=>{
         const result =   await addDoc(postRef,{
            description:"Rasta",
            id:"thisisId",
            title:"This is Title",
            username:"rasta@Rasta"
           })
           console.log(result);
    }
    return <div>
        <h1>This is Home_Page</h1>
        <button onClick={checkPost}>Post</button>
    </div>
}

export default Home