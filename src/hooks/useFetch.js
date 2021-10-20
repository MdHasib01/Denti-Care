import { useEffect, useState } from "react"

const useFetch = ()=> {
    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        fetch('/Database/blogDb.json',)
        .then(res=>res.json())
        .then(data=>setBlogs(data)
        )},[]);
        return [blogs];
};
export default useFetch;