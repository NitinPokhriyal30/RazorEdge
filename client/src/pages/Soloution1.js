import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios"; 

const Soloution1 = () => {

  const { id } = useParams();
  const [solution1, setSolution1] = useState([]);

  useEffect(() => {
    const get = async () => {
      const res = await Axios.get("http://localhost:5000/solution1-get/" + id);
      setSolution1(res.data);
    };
    get();
  }, [id]);

  return (
    <>
      <div>
        <div className="integration-hero-sec">
          <div className="empty-div integration-empty-div"></div>
          <div className="container ">
            <div className="row">
              <div className="col-lg-6 col-md-6 m-auto">
                <div className="integration-txt-container">
                  <span>{solution1.sol1ZeroSubtitle}</span>
                  <h2>{solution1.sol1ZeroTitle}</h2>
                  <p>{solution1.sol1ZeroPera}</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="integration-img-container">
                  <img
                    src={`http://localhost:5000/images/${solution1.sol1ZeroImage}`}
                    className="integration"
                    alt="integration"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bullets-point-sec integration-data-sec">
          <div className="container">
            <div className="row">
              <div className=" col-lg-6 col-md-6 integration-data-col">
                <div className="bullet-img-sec">
                  <img
                    src={`http://localhost:5000/images/${solution1.sol1FirstImage}`}
                    className="data"
                    alt="data"
                  />
                </div>
              </div>
              <div className=" col-lg-6 col-md-6 m-auto">
                <div className="integration-data-txt-container">
                  <h3>{solution1.sol1FirstHeading}</h3>
                  <p>{solution1.sol1FirstPera}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="unlock-the-value-txt-container">
          <h2>{solution1.sol1SecondHeading}</h2>
          <p>{solution1.sol1SecondPera}</p>
        </div>

        <div
          className="get-more-sec"
          // style={{ backgroundImage: `url(${Background})` }}
        >
          <div className="get-more-head">
            <h3>{solution1.sol1ThirdMainHeading}</h3>
          </div>
          <div className="container">
            <div className="row get-more-row">
              <div className="col-md-4 py-3">
                <div className="get-more-inner-col">
                  <img
                    src={`http://localhost:5000/images/${solution1.sol1Thirdcard1Image}`}
                    className="connect"
                    alt="connect"
                  />
                  <p>{solution1.sol1Thirdcard1Text}</p>
                </div>
              </div>
              <div className="col-md-4 py-3">
                <div className="get-more-inner-col">
                  <img
                    src={`http://localhost:5000/images/${solution1.sol1Thirdcard2Image}`}
                    className="connect"
                    alt="connect"
                  />
                  <p>{solution1.sol1Thirdcard2Text}</p>
                </div>
              </div>
              <div className="col-md-4 py-3">
                <div className="get-more-inner-col">
                  <img
                    src={`http://localhost:5000/images/${solution1.sol1Thirdcard3Image}`}
                    className="connect"
                    alt="connect"
                  />
                  <p>{solution1.sol1Thirdcard3Text}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bullets-point-sec integration-data-sec connect-with-tool-sec">
          <div className="container">
            <div className="row">
              <div className=" col-lg-6 col-md-6 integration-data-col">
                <div className="bullet-img-sec">
                  <img
                    src={`http://localhost:5000/images/${solution1.sol1FourthImage}`}
                    className="bulletsImg"
                    alt="bulletsImg"
                  />
                </div>
              </div>
              <div className=" col-lg-6 col-md-6 m-auto">
                <div className="integration-data-txt-container connect-tool">
                  <h3>{solution1.sol1FourthHeading}</h3>
                  <p>{solution1.sol1FourthPera}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
 
        <div className="bullets-point-sec integration-data-sec resources-sec mt-5">
          <div className="container">
            <div className="row">
              <div className=" col-lg-6 col-md-6 py-3 m-auto">
                <div className="integration-data-txt-container connect-tool resources-sec-txt-container">
                  <h3>{solution1.sol1FifthHeading}</h3>
                  <p>{solution1.sol1FifthPera}</p>
                  {/* <button>{solution1.sol1FifthBtnText}</button> */}
                </div>
              </div>
              <div className=" col-lg-6 col-md-6 py-3 m-auto">
                <div className="bullet-img-sec">
                  <img
                    src={`http://localhost:5000/images/${solution1.sol1FifthImage}`}
                    className="resources"
                    alt="resources"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Soloution1;
