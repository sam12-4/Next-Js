"use client"
import { useRef } from "react";
import { serverAction } from "@/actions/form";

export default function Home() {
  const ref = useRef()
  return (
    <div>
      Server Actions
      <form ref={ref} action={(e)=>{serverAction(e), ref.current.reset()}} className="container mx-auto">
        <div>
          <label htmlFor="name">Name</label>
          <input className="text-black" name="name" id="name" type="text" />
        </div>
        <div>
          <label htmlFor="add">Address</label>
          <input className="text-black" name="add" id="add" type="text" />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}
