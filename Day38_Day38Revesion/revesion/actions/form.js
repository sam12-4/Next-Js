"use server"
import fs from "fs/promises"
export const fetchServer = async(e) =>{
    let name = e.get("name1")
    let add = e.get("add1")
    let data = {name : name , add : add}
    let write = await fs.writeFile("sameer2.txt",JSON.stringify(data))
    console.log("File writed");
  }