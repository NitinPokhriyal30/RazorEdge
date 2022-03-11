import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AdminTestimonial from "../Testimonial/AdminTestimonial";
import { useNavigate } from "react-router-dom";

const WhyrazorEdgePage = (props) => {
  const navigate = useNavigate();
  const [WRESec1heading1, setWRESec1heading] = useState(props.WRESec1heading);
  const [WRESec1subheading1, setWRESec1subheading] = useState(
    props.WRESec1subheading
  );
  const [WRESec1image1, setWRESec1image] = useState(props.WRESec1image);
  const [WRESec2pera1, setWRESec2pera] = useState(props.WRESec2pera);
  const [WRESec2heading1, setWRESec2heading] = useState(props.WRESec2heading);
  const [WRESec2leftimg1, setWRESec2leftimg] = useState(props.WRESec2leftimg);
  const [WRESec2rightimg1, setWRESec2rightimg] = useState(
    props.WRESec2rightimg
  );
  const [WRESec3heading1, setWRESec3heading] = useState(props.WRESec3heading);
  const [WRESec3SliderHeading1, setWRESec3SliderHeading] = useState(
    props.WRESec3SliderHeading
  );
  const [WRESec3SliderImage1, setWRESec3SliderImage] = useState(
    props.WRESec3SliderImage
  );
  const [WRESec3SliderPera11, setWRESec3SliderPera1] = useState(
    props.WRESec3SliderPera1
  );
  const [WRESec3SliderPera21, setWRESec3SliderPera2] = useState(
    props.WRESec3SliderPera2
  );
  const [WRESec4Part1pera1, setWRESec4Part1pera] = useState(
    props.WRESec4Part1pera
  );
  const [WRESec4Part2pera1, setWRESec4Part2pera] = useState(
    props.WRESec4Part2pera
  );
  const [WRESec4Part3pera1, setWRESec4Part3pera] = useState(
    props.WRESec4Part3pera
  );
  const [WRESec5Subheading1, setWRESec5Subheading] = useState(
    props.WRESec5Subheading
  );
  const [WRESec5btntxt1, setWRESec5btntxt] = useState(props.WRESec5btntxt);
  const [WRESec5heading1, setWRESec5heading] = useState(props.WRESec5heading);

  const [accordian, setAccordian] = useState([]);
  const [update, setupdate] = useState(false);

  useEffect(() => {
    Axios.get("http://localhost:5000/wreaccordian").then((res) =>
      setAccordian(res.data)
    );

    navigate("/admin-why-razor-edge");
  }, []);

  const updateData = async (e) => {
    // e.preventdefault()
    const formData = new FormData();

    formData.append("WRESec1heading", WRESec1heading1);
    formData.append("WRESec1subheading", WRESec1subheading1);
    formData.append("WRESec2pera", WRESec2pera1);
    formData.append("WRESec2heading", WRESec2heading1);
    formData.append("WRESec3heading", WRESec3heading1);
    formData.append("WRESec3SliderHeading", WRESec3SliderHeading1);
    formData.append("WRESec3SliderPera1", WRESec3SliderPera11);
    formData.append("WRESec3SliderPera2", WRESec3SliderPera21);

    formData.append("WRESec4Part1pera", WRESec4Part1pera1);
    formData.append("WRESec4Part2pera", WRESec4Part2pera1);
    formData.append("WRESec4Part3pera", WRESec4Part3pera1);

    formData.append("WRESec5Subheading", WRESec5Subheading1);
    formData.append("WRESec5btntxt", WRESec5btntxt1);
    formData.append("WRESec5heading", WRESec5heading1);

    formData.append("WRESec1image", WRESec1image1);
    formData.append("WRESec1imageFilename", WRESec1image1.name);
    formData.append("WRESec2leftimg", WRESec2leftimg1);
    formData.append("WRESec2leftimgFilename", WRESec2leftimg1.name);
    formData.append("WRESec2rightimg", WRESec2rightimg1);
    formData.append("WRESec2rightimgFilename", WRESec2rightimg1.name);
    formData.append("WRESec3SliderImage", WRESec3SliderImage1);
    formData.append("WRESec3SliderImageFilename", WRESec3SliderImage1.name);
    formData.append("id", props.id);

    await Axios.put("http://localhost:5000/why-razor-edge-update", formData);
    navigate("/admin-why-razor-edge");
    // window.location.reload();
  };

  const caseStudyBtn = (e) => {
    navigate("/admin-case-studies");
  }

  return (
    <>
      <form
        id="post"
        // action="http://localhost:3000/admin-product"
        encType="multipart/form-data"
      >
        <div className="why-us-sec ">
          <div className="container">
            <div className="our-solution-head text-center py-5">
              <h3 className="text-uppercase">
                {update ? (
                  <textarea
                    className="h2txt"
                    value={WRESec1subheading1}
                    onChange={(e) => setWRESec1subheading(e.target.value)}
                  ></textarea>
                ) : (
                  WRESec1subheading1
                )}
              </h3>
              <h2>
                {update ? (
                  <textarea
                    className="h2txt"
                    value={WRESec1heading1}
                    onChange={(e) => setWRESec1heading(e.target.value)}
                  ></textarea>
                ) : (
                  WRESec1heading1
                )}
              </h2>
            </div>
          </div>
          <div className="empty-div"></div>
          <div className="container">
            <div className="why-us-img-container text-center">
              {update ? (
                <input
                  className="form-control"
                  type="file"
                  name="WRESec1image"
                  onChange={(e) => setWRESec1image(e.target.files[0])}
                />
              ) : (
                <img
                  src={`http://localhost:5000/images/${WRESec1image1}`}
                  className="whyUs"
                  alt="whyUs"
                />
              )}
            </div>
          </div>
        </div>

        <div className="problem-sec">
          <div className="row problem-rw">
            <div className="col-md-2">
              <div className="problem-img-container">
                {update ? (
                  <input
                    className="form-control"
                    type="file"
                    name="WRESec2leftimg"
                    onChange={(e) => setWRESec2leftimg(e.target.files[0])}
                  />
                ) : (
                  <img
                    src={`http://localhost:5000/images/${WRESec2leftimg1}`}
                    className="problem1"
                    alt="problem1"
                  />
                )}
              </div>
            </div>
            <div className="col-md-8 m-auto">
              <div className="the-problem-head our-solution-head text-center py-3 ">
                <h2>
                  {update ? (
                    <textarea
                      className="form-control"
                      value={WRESec2heading1}
                      onChange={(e) => setWRESec2heading(e.target.value)}
                    ></textarea>
                  ) : (
                    WRESec2heading1
                  )}
                </h2>
                <p>
                  {update ? (
                    <textarea
                      className="form-control"
                      value={WRESec2pera1}
                      onChange={(e) => setWRESec2pera(e.target.value)}
                    ></textarea>
                  ) : (
                    WRESec2pera1
                  )}
                </p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="problem-img-container">
                {update ? (
                  <input
                    className="form-control"
                    type="file"
                    name="WRESec2rightimg"
                    onChange={(e) => setWRESec2rightimg(e.target.files[0])}
                  />
                ) : (
                  <img
                    src={`http://localhost:5000/images/${WRESec2rightimg1}`}
                    className="problem1"
                    alt="problem1"
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="why-us-slider">
          <div className="our-solution-head text-center py-5">
            <h2>
              {update ? (
                <textarea
                  className="h2txt"
                  value={WRESec3heading1}
                  onChange={(e) => setWRESec3heading(e.target.value)}
                ></textarea>
              ) : (
                WRESec3heading1
              )}
            </h2>
          </div>
          <div className="our-product pb-5">
            <div className="case-studies-sec pb-5">
              <div className="container">
                <div
                  id="myCarousel2"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner" id="carousel-inner">
                    <div>
                      <div className="row">
                        <div className=" col-lg-6 m">
                          <div className="bullet-img-sec">
                            {update ? (
                              <input
                                className="form-control"
                                type="file"
                                name="WRESec3SliderImage"
                                onChange={(e) =>
                                  setWRESec3SliderImage(e.target.files[0])
                                }
                              />
                            ) : (
                              <img
                                src={`http://localhost:5000/images/${WRESec3SliderImage1}`}
                                className="bulletsImg"
                                alt="bulletsImg"
                              />
                            )}
                          </div>
                        </div>
                        <div className=" col-lg-6 m-auto">
                          <div className="slider-txt-container">
                            <p>
                              {update ? (
                                <textarea
                                  className="form-control"
                                  value={WRESec3SliderPera11}
                                  onChange={(e) =>
                                    setWRESec3SliderPera1(e.target.value)
                                  }
                                ></textarea>
                              ) : (
                                WRESec3SliderPera11
                              )}
                            </p>

                            <h3>
                              <strong>
                                {update ? (
                                  <textarea
                                    className="form-control"
                                    value={WRESec3SliderHeading1}
                                    onChange={(e) =>
                                      setWRESec3SliderHeading(e.target.value)
                                    }
                                  ></textarea>
                                ) : (
                                  WRESec3SliderHeading1
                                )}
                              </strong>
                            </h3>
                            <p>
                              {update ? (
                                <textarea
                                  className="form-control"
                                  value={WRESec3SliderPera21}
                                  onChange={(e) =>
                                    setWRESec3SliderPera2(e.target.value)
                                  }
                                ></textarea>
                              ) : (
                                WRESec3SliderPera21
                              )}
                            </p>
                          </div>
                          <div className="accordion" id="accordionExample">
                            {accordian.map((value, index) => (
                              <div key={index}>
                                <div className="row mt-2">
                                  <div className="col col-md-10">
                                    <Accordion key={index}>
                                      <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls={`panel${index}a-content`}
                                        id={`panel${index}a-header`}
                                      >
                                        <Typography>
                                          {value.accordianHeading}
                                        </Typography>
                                      </AccordionSummary>
                                      <AccordionDetails>
                                        <Typography>
                                          {value.accordianDecs}
                                        </Typography>
                                      </AccordionDetails>
                                    </Accordion>
                                  </div>
                                  <div className="col col-md-2 m-auto">
                                    <Link
                                      to={`/admin-why-razor-edge/accordian/${value._id}`}
                                      className="edit-btn"
                                    >
                                      Edit
                                      <i className="fa-solid fa-pen-to-square"></i>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="why-us-counter py-5">
          <div className="counter-inner-sec ">
            <div className="container">
              <div className="row">
                <div className="col-md-4 text-center counter-first-container m-auto">
                  <div className="counter-inner-col">
                    <p>
                      {update ? (
                        <textarea
                          className="form-control"
                          value={WRESec4Part1pera1}
                          onChange={(e) => setWRESec4Part1pera(e.target.value)}
                        ></textarea>
                      ) : (
                        WRESec4Part1pera1
                      )}
                    </p>
                  </div>
                </div>
                <div className="col-md-4 m-auto text-center counter-second-container">
                  <div className="counter-inner-col">
                    <p>
                      {update ? (
                        <textarea
                          className="form-control"
                          value={WRESec4Part2pera1}
                          onChange={(e) => setWRESec4Part2pera(e.target.value)}
                        ></textarea>
                      ) : (
                        WRESec4Part2pera1
                      )}
                    </p>
                  </div>
                </div>
                <div className="col-md-4 m-auto text-center">
                  <div className="counter-inner-col">
                    <p>
                      {update ? (
                        <textarea
                          className="form-control"
                          value={WRESec4Part3pera1}
                          onChange={(e) => setWRESec4Part3pera(e.target.value)}
                        ></textarea>
                      ) : (
                        WRESec4Part3pera1
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="testimonial-second ">
          <div className="our-solution-head pb-5">
            <h3 className="what-we-offer">
              {update ? (
                <textarea
                  value={WRESec5Subheading1}
                  onChange={(e) => setWRESec5Subheading(e.target.value)}
                ></textarea>
              ) : (
                WRESec5Subheading1
              )}
            </h3>
            <h2>
              {update ? (
                <textarea
                  value={WRESec5heading1}
                  onChange={(e) => setWRESec5heading(e.target.value)}
                ></textarea>
              ) : (
                WRESec5heading1
              )}
            </h2>
              {update ? (
                <textarea
                  className="form-control"
                  value={WRESec5btntxt1}
                  onChange={(e) => setWRESec5btntxt(e.target.value)}
                ></textarea>
              ) : (
                <button onClick={() => caseStudyBtn()}>{WRESec5btntxt1}</button>
              )}
          </div>
          <div
            id="myCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators testimonial-indi">
              <button
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
            </div>
            <div className="carousel-inner">
              <AdminTestimonial />
            </div>
          </div>
        </div>

        {update ? (
          <button
            type="submit"
            onClick={updateData}
            className="why-razor-fix-update-btn"
          >
            Update Page
            <i className="fa-solid fa-repeat "></i>
          </button>
        ) : (
          ""
        )}
      </form>
      <button
        onClick={() => setupdate(true)}
        className="why-razor-fix-edit-btn"
      >
        Edit Page
        <i className="fa-solid fa-pen-to-square ps-2"></i>
      </button>
    </>
  );
};

export default WhyrazorEdgePage;
