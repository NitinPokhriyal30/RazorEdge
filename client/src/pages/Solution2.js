import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import { Link } from "react-router-dom";

const Solution2 = () => {
  const { id } = useParams();
  const [data, setData] = useState([]); 

  useEffect(() => {
    Axios.get("http://localhost:5000/solution2-get/" + id).then((res) =>  
      setData(res.data)
    );
  }, [id]);

  return (
    <>
      <div className="investor-sentiment-sec">
        <div className="container">
          <div className="row">
            <div className="invester-inner-txt-container">
              <h3>{data.sol2FirstMainSubHeading}</h3>
              <h2>{data.sol2FirstMaiHeading}</h2>
              <p>{data.sol2FirstMainPera}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bullets-point-sec integration-data-sec solution-investor-sec">
        <div className="container">
          <div className="row">
            <div className=" col-lg-6 col-md-6 integration-data-col pb-3">
              <div className="bullet-img-sec">
                <img
                  src={`http://localhost:5000/images/${data.sol2FirstImage}`}
                  className="whyUs"
                  alt="whyUs"
                />
              </div>
            </div>
            <div className=" col-lg-6 col-md-6 m-auto">
              <div className="integration-data-txt-container">
                <h3>{data.sol2FirstHeading}</h3>
                <p>{data.sol2FirstPera}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="unlock-the-value-sec">
        <div className="unlock-the-value-txt-container solution-unlock-the-value">
          <h2>{data.sol2SecondHeading}</h2>
          <p>{data.sol2SecondPera}</p>
        </div>
      </div>
      <div className="bullets-point-sec solution-connect-sec">
        <div className="container">
          <div className="row">
            <div className=" col-lg-6 col-md-6 integration-data-col">
              <div className="bullet-img-sec">
                <img
                  src={`http://localhost:5000/images/${data.sol2ThirdImage}`}
                  className="bulletsImg"
                  alt="bulletsImg"
                />
              </div>
            </div>
            <div className=" col-lg-6 col-md-6 m-auto">
              <div className="integration-data-txt-container connect-tool">
                <h3>{data.sol2ThirdHeading}</h3>
                <p>{data.sol2ThirdPera}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="stay-update-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-6 pb-3">
              <div className="integration-data-txt-container">
                <h3>{data.sol2FourthHeading}</h3>
                <Link className="footer-register-btn stay-update-btn" to="/">
                  <button>{data.sol2FourthBtnTxt}</button>
                </Link>
              </div>
            </div>
            <div className="col-md-6">
              <div className="stay-update-txt">
                <p>{data.sol2FourthPera}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Solution2;
