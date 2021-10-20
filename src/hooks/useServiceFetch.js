import { useEffect, useState } from "react"

const useServiceFetch = ()=> {
    const [services, setServices] = useState([]);


        useEffect(()=>{
            fetch('/Database/serviceDb.json')
            .then(res=>res.json())
            .then(data=>setServices(data))
        },[]);

        return [services];
};
export default useServiceFetch;