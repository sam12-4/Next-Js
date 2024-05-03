"use client"
import Navbar from "@/components/Navbar";
// import fs from "fs/promises"

export default function Home() {
  // const [count, setCount] = useState(0)
  console.log("sameer");

  // let a = fs.readFile(".gitignore")
  // a.then(e=>{console.log(e.toString());})

  return (<>
  {/* <div>I am count of value {count}</div> */}
    I am page
    <Navbar />
  {/* <button onClick={()=>{setCount(count+1)}}>Change count</button> */}
  </>)
}
