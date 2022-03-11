import React, { useEffect, useState } from "react";
import Axios from "axios";
import Disclaimer from '../adminComponents/Disclaimer/Disclaimer'

const AdminDisclaimer = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:5000/disclaimer").then((res) =>
      setData(res.data)
    );
  }, []);

  return (
    <>
      {data.map((value, index) => (
        <Disclaimer
          key={index}
          title={value.title}
          desc={value.desc}
          time={value.createdAt}
          id={value._id}
        />
      ))}
    </>
  )
}

export default AdminDisclaimer