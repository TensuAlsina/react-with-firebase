import { getDocs,collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import { Post } from "./post";


export interface Post{
    id:string;
    userId:string;
    title:string;
    username:string;
    description:string;
}
 
const Home = ()=>{
    const [postsList,setPostsList] = useState<Post[] | null>(null)
    const postRef = collection(db,"posts");

    const getPosts = async()=>{
        const data = await getDocs(postRef)
        setPostsList(data.docs.map((doc)=>({
            ...doc.data(),
            id:doc.id,
        })) as Post[])
    }

     useEffect(()=>{
        getPosts()
     },[])
    
    return <div>
        <h1>Home_page</h1>
        {postsList?.map((post)=>(<Post post={post}/>))}
    </div>
}

export default Home;