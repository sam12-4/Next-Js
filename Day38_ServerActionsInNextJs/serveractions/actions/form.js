"use server"
import fs from "fs/promises"
export const serverAction = async (e)=>{
    let name= await e.get("name"); 
    let add= await e.get("add");
    let write = await fs.writeFile("sameer.txt", `Name is ${name}, address is ${add}`)
  }