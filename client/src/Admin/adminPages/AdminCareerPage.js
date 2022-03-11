import React, { useEffect, useState } from 'react';
import Axios from "axios";
import CareerPage from '../adminComponents/Career/CareerPage';

const AdminCareerPage = () => {

    const [career, setCareer] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:5000/career").then((res) =>
    setCareer(res.data)
    );
  }, []);

  return (
    <>
        {career.map((value,index)=>(
            <CareerPage 
                key={index}
                sec1heading = {value.Sec1.heading}
                sec1subheading = {value.Sec1.subheading}
                sec1img = {value.Sec1.img}
                sec1btntxt = {value.Sec1.btntxt}
                sec2heading = {value.Sec2.heading}
                sec2pera = {value.Sec2.pera}
                sec3heading = {value.Sec3.heading}
                sec3subheading = {value.Sec3.subheading}
                sec4heading = {value.sec4.heading}
                sec4subheading = {value.sec4.subheading}
                id={value._id}
            />
        ))}
        
    </>  
  )
}

export default AdminCareerPage