//封装一个react-router中的push方法跳转
import { useEffect } from "react";

export default function (){
    useEffect(
        ()=>{
        console.log(props.path);
        this.props.history.push(`${props.path}`);
        },[]);    
    return (

        this.props.history.push(`${props.path}`)
    );
}