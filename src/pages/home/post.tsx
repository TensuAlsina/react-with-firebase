import { Post as IPost } from "./home"
interface Props{
    post:IPost;
}
export const Post = (props:Props)=>{
    const {post } = props;
    return <div className="bg-teal-400 mt-3">
        <h1>{post.title}</h1>
        <p>{post.description}</p>
        <p>@{post.username}</p>
    </div>
}