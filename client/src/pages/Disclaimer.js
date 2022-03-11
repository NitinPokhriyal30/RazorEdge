import React, { useEffect, useState } from "react";
import Axios from "axios";
import parse from "html-react-parser";
 
const Disclaimer = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:5000/disclaimer").then((res) =>
            setData(res.data)
        );

    }, []);

    return (
        <>
            {data.map((value, index) => (
                <div key={index}>
                    <div className="disclaimer-head-sec">
                        <h2>{value.title}</h2>
                    </div>

                    <div className="accept-of-terms-sec">
                        <div className="container">
                            <div className="accept-of-terms-txt-container">
                                <h3>Acceptance of Terms</h3>
                                <div>
                                    {parse(value.desc)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Disclaimer;
