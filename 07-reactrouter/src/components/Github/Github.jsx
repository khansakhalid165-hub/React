import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
function Github(){
    const data=useLoaderData()
    // const[data,setdata]=useState([])
    // useEffect(()=>{
    //     fetch("https://api.github.com/users/khansakhalid165-hub").
    //     then(response=>response.json()).
    //     then(data=>{
    //         console.log(data)
    //         setdata(data)

    //     })
    // },[])
    return(
        <>
        
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">Github Followers:{data.followers}</div>
    <img src={data.avatar_url}alt="Git picture" width={300} />
    </>
    )
}
export default Github
export const githubinfoloader=async()=>{
    const response=await fetch("https://api.github.com/users/khansakhalid165-hub")
    return response.json()
}