import { useEffect, useState } from "react";
import axios from "axios";
import { EditPage } from "./EditPage";
import { URL } from "../Constant";

export function EditDetail({match}){
   const id=match.params.id;


    const [detail,setDetail]=useState()
    
    const editDetail=async ()=>{
        try{
        const {data}=await axios.get(`${URL}/api/job/${id}`)
        setDetail(data)
        }catch(err){
            window.alert(err)
        }
    }
    useEffect(()=>{
        editDetail() 
        // eslint-disable-next-line 
    },[])
    

    console.log(detail)

   return detail ? <EditPage updateDetail={detail[0]}/> : " " 
       
}