
import axios from "axios";
import { useEffect, useState } from "react";
import { Details } from "./Details";
import { URL } from "../Constant";



export function Display() {

    const [detail,setDetail]=useState([])
    
    useEffect(()=>{
         axios
         .get(`${URL}/api/job`)
        .then(res=>setDetail(res.data))
        .catch(err=>console.log(err))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])


    
  return (

<Details detail={detail}/>
  );
}
