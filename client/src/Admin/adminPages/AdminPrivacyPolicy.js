import React, { useEffect, useState } from "react";
import Axios from "axios";
import PrivacyPolicy from "../adminComponents/PrivacyPolicy/PrivacyPolicy";

const AdminPrivacyPolicy = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        Axios.get("http://localhost:5000/privacy-policy").then((res) =>
            setData(res.data) 
        );

    }, []); 

    return (
        <>
            {data.map((value,index)=>(  
                <PrivacyPolicy key={index}
                    title = {value.title}
                    desc = {value.desc}
                    time = {value.createdAt}
                    id = {value._id}
                />
            ))}
        </>
    )
}

export default AdminPrivacyPolicy