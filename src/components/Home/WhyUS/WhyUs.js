import React, { useEffect, useState } from 'react';
import Reason from '../Reason/Reason';


const WhyUs = () => {
    const [reasons, setReasons] = useState([]);

    useEffect(()=>{
    fetch('./choosing_reasons.json')
    .then(res=>res.json())
    .then(data=>setReasons(data))
    },[])
    return (
        <div className="row g-4">
            {
                reasons.map(reason=><Reason 
                key={reason.id}
                reason={reason}
                ></Reason>)
            }
        </div>
    );
};

export default WhyUs;