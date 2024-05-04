"use client"

export default function Home() {
  const handleClick=async()=>{
    let data ={name : "Sameer", profession : "Systems Engineer"}
    const a = await fetch("/api/add", {method : "POST", headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    let res = await a.json()
    console.log(res);
  }
  return (
    <>
    <div>Fetch Me</div>
    <button onClick={handleClick}>click me</button>
    </>
  );
}
