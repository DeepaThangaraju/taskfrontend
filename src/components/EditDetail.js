import { useEffect, useState } from "react";
import axios from "axios";
import { EditPage } from "./EditPage";

export function EditDetail({match}){
   const id=match.params.id;


    const [detail,setDetail]=useState()
    
    const editDetail=async ()=>{
        try{
        const {data}=await axios.get(`http://localhost:5000/api/job/${id}`)
        setDetail(data)
        }catch(err){
            window.alert(err)
        }
    }
    useEffect(()=>{
        editDetail()   
    },[])
    

    console.log(detail)

   return detail ? <EditPage updateDetail={detail[0]}/> : " " 
       
}