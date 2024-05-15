export default function Page({ params }) {
    // throw new Error("error") agar error dikhana hai to
    let languages = ["python", "javascript", "java"]
    console.log(params);
    if (languages.includes(params.slug)){
        return <div>My Post: {params.slug}</div>
    }
    else{
        return <div>no post to show</div>
    }
  }