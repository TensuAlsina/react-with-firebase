interface FormProps{
    name?:string;
    age:number
}



const Form = (props:FormProps)=>{
    return <div>
        <h1>name: {props.age}</h1>
    </div>
}
export default Form