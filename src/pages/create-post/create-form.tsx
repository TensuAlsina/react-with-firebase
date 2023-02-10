import { useForm } from "react-hook-form"
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"
import {collection,addDoc} from "firebase/firestore"
import { auth, db } from "../../config/firebase";
import { useNavigate } from "react-router-dom";


// interface PostInterface {
//     title:string,
//     description:string,
//     id:string,
//     username:string,
// }


export const CreateForm = ()=>{
    const navigate = useNavigate()
    const postsRef = collection(db,"posts")
    const schema = yup.object().shape({
        title:yup.string().required("You must add a title"),
        description:yup.string().required("You must add a description"),
       
    })

    const {register,handleSubmit,} = useForm({
        resolver:yupResolver(schema)
    })
    const onCreatePost =async (data:any)=>{
        await addDoc(postsRef,{
            title:data.title,
            description:data.description,
            id:auth.currentUser?.uid,
            username:auth.currentUser?.displayName

        }).then((result)=>{
             navigate("/")
        }).catch((err)=>{
            alert(err)
        })
    };
    return (
        <form  onSubmit={handleSubmit(onCreatePost)}>
            <input type="text" placeholder="Title.." {...register("title")}/>
            <textarea  placeholder="Description.."   {...register("description")}/>
            <input type="submit" value="Submit" />
        </form>
    )
};