"use client"

import { fetchServer } from "@/actions/form";
import { useRef } from "react";
import Image from "next/image";

export default function Home() {
  const fetchApi =async(e)=>{
    let name = await e.get("name")
    let add = await e.get("add")
    let data = {name : name , add : add}
    let a= await fetch("/api/add", {method : "POST", headers : {"Content-Type" : "application/json"}, body : JSON.stringify(data)})
    let res = await a.json()
    console.log(res); 
  }

  let ref = useRef()

  return (
   <>
   <div className="relative size-96">
   <Image className="object-contain" src="http:///www.menucool.com/slider/prod/image-slider-3.jpg" fill={true}/>
   </div>
   <div>
    <form action={fetchApi}>      
    <h1>Apis</h1>
    <p>Click here to fetch apis</p>
    <div>      
      <label htmlFor="name">Name</label>
    <input className="text-black" name="name" type="text" />
    </div>
    <div>      
      <label htmlFor="add">Address</label>
    <input className="text-black" name="add" type="text" />
    </div>
    <button>click here</button>
    </form>
    <form  ref={ref} action={(e)=>{fetchServer(e), ref.current.reset()}}>      
    <h1>Apis</h1>
    <p>Click here for server actions</p>
    <div>      
      <label htmlFor="name">Name</label>
    <input className="text-black" name="name1" type="text" />
    </div>
    <div>      
      <label htmlFor="add">Address</label>
    <input className="text-black" name="add1" type="text" />
    </div>
    <button>click here</button>
    </form>
   </div>
   
   </>
  );
}
