import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [proSecondBullets, setproSecondBullets] = useState([]);
  const [proproThirdAccordia, setproproThirdAccordia] = useState([]);

  useEffect(() => {
    const get = async () => {
      const res = await Axios.get(
        "http://localhost:5000/product-get/product/" + id
      );
      setProduct(res.data);
      setproSecondBullets(res.data.proSecondBullets);
      setproproThirdAccordia(res.data.proThirdAccordia);
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
                  <span>{product.proFirstSubHeading}</span>
                  <h2>{product.proFirstHeading}</h2>
                  <p>{product.proFirstPera}</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="integration-img-container">
                  <img
                    src={`http://localhost:5000/images/${product.proFirstImage}`}
                    className="integration"
                    alt="integration"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bullets-point-sec factor-edge-sec">
          <div className="container">
            <div className="factor-edge-heading ">
              <h5>{product.proSecondSubHeading}</h5>
              <h2>{product.proSecondHeading}</h2>
            </div>
            <div className="row">
              <div className=" col-lg-6 col-md-6 integration-data-col">
                <div className="bullet-img-sec">
                  <img
                    src={`http://localhost:5000/images/${product.proSecondImage}`}
                    className="data"
                    alt="data"
                  />
                </div>
              </div>
              <div className=" col-lg-6 m-auto">
                <div className="bullet-txt-container">
                  <ul>
                    {proSecondBullets.map((e, index) => (
                      <li key={index}>{e}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bullets-point-sec product-accor-sec">
          <div className="container">
            <div className="row">
              <div className=" col-lg-6 col-md-6 pb-3 integration-data-col">
                <div className="bullet-img-sec">
                  <img
                    src={`http://localhost:5000/images/${product.proThirdImage}`}
                    className="Intersection"
                    alt="Intersection"
                  />
                </div>
              </div>
              <div className=" col-lg-6 m-auto">
                <div className="slider-txt-container product-accor">
                  <h3>
                    <strong>{product.proThirdHeading}</strong>
                  </h3>
                  <p>{product.proThirdPera}</p>
                  <div className="accordion" id="accordionExample">
                    {proproThirdAccordia.map((value, index) => (
                      <Accordion key={index}>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls={`panel${index}a-content`}
                          id={`panel${index}a-header`}
                        >
                          <Typography>{value.title}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>{value.desc}</Typography>
                        </AccordionDetails>
                      </Accordion>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product-three-comp-sec text-center">
          <div className="container">
            <div className="row product-comp-rw">
              <div className="col-md-3 py-3">
                <div className="product-first-img">
                  <img
                    src={`http://localhost:5000/images/${product.proFourthCards1img}`}
                    className={product.proFourthCards1img}
                    alt={product.proFourthCards1img}
                  />
                </div>
                <div className="product-first-comp">
                  <h5>{product.proFourthCards1title}</h5>
                  <p>{product.proFourthCards1desc}</p>
                </div>
              </div>
              <div className="col-md-3 py-3">
                <div className="product-first-img">
                  <img
                    src={`http://localhost:5000/images/${product.proFourthCards2img}`}
                    className={product.proFourthCards2img}
                    alt={product.proFourthCards2img}
                  />
                </div>
                <div className="product-first-comp">
                  <h5>{product.proFourthCards2title}</h5>
                  <p>{product.proFourthCards2desc}</p>
                </div>
              </div>
              <div className="col-md-3 py-3">
                <div className="product-first-img">
                  <img
                    src={`http://localhost:5000/images/${product.proFourthCards3img}`}
                    className={product.proFourthCards3img}
                    alt={product.proFourthCards3img}
                  />
                </div>
                <div className="product-first-comp">
                  <h5>{product.proFourthCards3title}</h5>
                  <p>{product.proFourthCards3desc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
