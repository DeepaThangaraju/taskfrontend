
import axios from "axios";
import { useEffect, useState } from "react";
import { Details } from "./Details";



export function Display() {

    const [detail,setDetail]=useState([])
    
    useEffect(()=>{
         axios
         .get("http://localhost:5000/api/job")
        .then(res=>setDetail(res.data))
        .catch(err=>console.log(err))
    },[])


    
  return (

<Details detail={detail}/>
  );
}
