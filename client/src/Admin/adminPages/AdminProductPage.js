import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";

const AdminProductPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [key, setKey] = useState("");
  const [pageName1, setpageName] = useState("");
  const [pageDesc1, setpageDesc] = useState("");
  const [proSecondBullets1, setproSecondBullets] = useState([]);
  const [proThirdAccordia1, setproThirdAccordia] = useState([]);
  const [proFirstHeading1, setProFirstHeading] = useState("");
  const [proFirstImage1, setProFirstImage] = useState("");
  const [proFirstPera1, setProFirstPera] = useState("");
  const [proFirstSubHeading1, setProFirstSubHeading] = useState("");
  const [proSecondHeading1, setProSecondHeading] = useState("");
  const [proSecondImage1, setProSecondImage] = useState("");
  const [proSecondSubHeading1, setProSecondSubHeading] = useState("");
  const [proThirdHeading1, setProThirdHeading] = useState("");
  const [proThirdImage1, setProThirdImage] = useState("");
  const [proThirdPera1, setProThirdPera] = useState("");
  const [proFourthCards1img1, setproFourthCards1img] = useState("");
  const [proFourthCards1title1, setproFourthCards1title] = useState("");
  const [proFourthCards1desc1, setproFourthCards1desc] = useState("");
  const [proFourthCards2img1, setproFourthCards2img] = useState("");
  const [proFourthCards2title1, setproFourthCards2title] = useState("");
  const [proFourthCards2desc1, setproFourthCards2desc] = useState("");
  const [proFourthCards3img1, setproFourthCards3img] = useState("");
  const [proFourthCards3title1, setproFourthCards3title] = useState("");
  const [proFourthCards3desc1, setproFourthCards3desc] = useState("");

  const [update, setupdate] = useState(false);

  useEffect(() => {
    const get = async () => {
      const res = await Axios.get(
        `http://localhost:5000/product-get/product/${id}`
      );
      setKey(res.data._id);
      setpageName(res.data.pageName);
      setpageDesc(res.data.pageDesc);
      setproSecondBullets(res.data.proSecondBullets);
      setproThirdAccordia(res.data.proThirdAccordia);
      setProFirstHeading(res.data.proFirstHeading);
      setProFirstImage(res.data.proFirstImage);
      setProFirstPera(res.data.proFirstPera);
      setProFirstSubHeading(res.data.proFirstSubHeading);
      setProSecondHeading(res.data.proSecondHeading);
      setProSecondImage(res.data.proSecondImage);
      setProSecondSubHeading(res.data.proSecondSubHeading);
      setProThirdHeading(res.data.proThirdHeading);
      setProThirdImage(res.data.proThirdImage);
      setProThirdPera(res.data.proThirdPera);
      setproFourthCards1img(res.data.proFourthCards1img);
      setproFourthCards1title(res.data.proFourthCards1title);
      setproFourthCards1desc(res.data.proFourthCards1desc);
      setproFourthCards2img(res.data.proFourthCards2img);
      setproFourthCards2title(res.data.proFourthCards2title);
      setproFourthCards2desc(res.data.proFourthCards2desc);
      setproFourthCards3img(res.data.proFourthCards3img);
      setproFourthCards3title(res.data.proFourthCards3title);
      setproFourthCards3desc(res.data.proFourthCards3desc);
    };
    get();
  }, [id]);

  const updateData = async (e) => {
    const data = {
      pageName: pageName1,
      pageDesc: pageDesc1,
      proFirstHeading: proFirstHeading1,
      proFirstImage: proFirstImage1,
      proFirstImageFilename: proFirstImage1.name,
      proFirstPera: proFirstPera1,
      proFirstSubHeading: proFirstSubHeading1,
      proSecondHeading: proSecondHeading1,
      proSecondImage: proSecondImage1,
      proSecondImageFilename: proSecondImage1.name,
      proSecondSubHeading: proSecondSubHeading1,
      proSecondBullets: proSecondBullets1,
      proThirdHeading: proThirdHeading1,
      proThirdImage: proThirdImage1,
      proThirdImageFilename: proThirdImage1.name,
      proThirdPera: proThirdPera1,
      proThirdAccordia: proThirdAccordia1,
      proFourthCards1title: proFourthCards1title1,
      proFourthCards1desc: proFourthCards1desc1,
      proFourthCards2title: proFourthCards2title1,
      proFourthCards2desc: proFourthCards2desc1,
      proFourthCards3title: proFourthCards3title1,
      proFourthCards3desc: proFourthCards3desc1,
      proFourthCards1img: proFourthCards1img1,
      proFourthCards1imgFilename: proFourthCards1img1.name,
      proFourthCards2img: proFourthCards2img1,
      proFourthCards2imgFilename: proFourthCards2img1.name,
      proFourthCards3img: proFourthCards3img1,
      proFourthCards3imgFilename: proFourthCards3img1.name,
      id: key,
    };

    await Axios.put("http://localhost:5000/product-update", data);
    window.location.reload();
    // navigate(`/admin-dashboard`);
  };

  const deleteBullet = (e, index) => {
    proSecondBullets1.splice(index, 1);
    const newdata = {
      proSecondBullets: proSecondBullets1,
    };
    Axios.put(`http://localhost:5000/product-update/${key}`, newdata).then(
      (res) => navigate(`/admin-product/${id}`)
    );
  };

  const deleteAccordian = (e, index) => {
    proThirdAccordia1.splice(index, 1);
    const newdata = {
      proThirdAccordia: proThirdAccordia1,
    };
    Axios.put(`http://localhost:5000/product-update/${key}`, newdata).then(
      (res) => navigate(`/admin-product/${id}`)
    );
  };

  const addData = (e) => {
    navigate("/admin-product-add");
  };

  const deleteData = () => {
    Axios.delete(`http://localhost:5000/product-delete/${key}`);
    navigate("/admin-dashboard");
  };

  return (
    <>
      <form id="post" encType="multipart/form-data">
        <div className="integration-hero-sec">
          <div className="empty-div integration-empty-div"></div>
          <div className="container ">
            <div className="row">
              <div className="col-lg-6 col-md-6 m-auto">
                <div className="integration-txt-container">
                  <h3>
                    {update ? (
                      <textarea
                        value={pageName1}
                        onChange={(e) => setpageName(e.target.value)}
                      ></textarea>
                    ) : (
                      pageName1
                    )}
                  </h3>
                  <h3>
                    {update ? (
                      <textarea
                        value={pageDesc1}
                        onChange={(e) => setpageDesc(e.target.value)}
                      ></textarea>
                    ) : (
                      pageDesc1
                    )}
                  </h3>
                  <span>
                    {update ? (
                      <textarea
                        className="form-control"
                        value={proFirstSubHeading1}
                        onChange={(e) => setProFirstSubHeading(e.target.value)}
                      ></textarea>
                    ) : (
                      proFirstSubHeading1
                    )}
                  </span>
                  <h2>
                    {update ? (
                      <textarea
                        className="form-control"
                        value={proFirstHeading1}
                        onChange={(e) => setProFirstHeading(e.target.value)}
                      ></textarea>
                    ) : (
                      proFirstHeading1
                    )}
                  </h2>
                  <p>
                    {update ? (
                      <textarea
                        className="form-control"
                        value={proFirstPera1}
                        onChange={(e) => setProFirstPera(e.target.value)}
                      ></textarea>
                    ) : (
                      proFirstPera1
                    )}
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="integration-img-container">
                  {update ? (
                    <input
                      className="form-control"
                      type="file"
                      name="proFirstImage"
                      onChange={(e) => setProFirstImage(e.target.files[0])}
                    />
                  ) : (
                    <img
                      src={`http://localhost:5000/images/${proFirstImage1}`}
                      className="VideoImg"
                      alt="VideoImg"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bullets-point-sec factor-edge-sec">
          <div className="container">
            <div className="factor-edge-heading ">
              <h5>
                {update ? (
                  <textarea
                    className="form-control"
                    value={proSecondSubHeading1}
                    onChange={(e) => setProSecondSubHeading(e.target.value)}
                  ></textarea>
                ) : (
                  proSecondSubHeading1
                )}
              </h5>
              <h2>
                {update ? (
                  <textarea
                    className="form-control"
                    value={proSecondHeading1}
                    onChange={(e) => setProSecondHeading(e.target.value)}
                  ></textarea>
                ) : (
                  proSecondHeading1
                )}
              </h2>
            </div>
            <div className="row">
              <div className=" col-lg-6 col-md-6 integration-data-col">
                <div className="bullet-img-sec">
                  {update ? (
                    <input
                      className="form-control"
                      type="file"
                      name="proSecondImage"
                      onChange={(e) => setProSecondImage(e.target.files[0])}
                    />
                  ) : (
                    <img
                      src={`http://localhost:5000/images/${proSecondImage1}`}
                      className="VideoImg"
                      alt="VideoImg"
                    />
                  )}
                </div>
              </div>
              <div className=" col-lg-6 m-auto">
                <div className="bullet-txt-container">
                  <ul>
                    {proSecondBullets1.map((value, index) => (
                      <div key={index}>
                        <li>
                          <div className="row">
                            <div className="col col-md-10">{value}</div>
                            <div className="col col-md-2">
                              <button
                                type="button"
                                className="btn btn-danger"
                                onClick={(e) => deleteBullet(e, index)}
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        </li>
                      </div>
                    ))}
                    <Link to={`/admin-product/bullet-add/${key}`}>
                      <button type="button" className="btn btn-primary">
                        Add New
                      </button>
                    </Link>
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
                  {update ? (
                    <input
                      className="form-control"
                      type="file"
                      name="proThirdImage"
                      onChange={(e) => setProThirdImage(e.target.files[0])}
                    />
                  ) : (
                    <img
                      src={`http://localhost:5000/images/${proThirdImage1}`}
                      className="VideoImg"
                      alt="VideoImg"
                    />
                  )}
                </div>
              </div>
              <div className=" col-lg-6 m-auto">
                <div className="slider-txt-container product-accor">
                  <h3>
                    <strong>
                      {update ? (
                        <textarea
                          className="form-control"
                          value={proThirdHeading1}
                          onChange={(e) => setProThirdHeading(e.target.value)}
                        ></textarea>
                      ) : (
                        proThirdHeading1
                      )}
                    </strong>
                  </h3>
                  <p>
                    {update ? (
                      <textarea
                        className="form-control"
                        value={proThirdPera1}
                        onChange={(e) => setProThirdPera(e.target.value)}
                      ></textarea>
                    ) : (
                      proThirdPera1
                    )}
                  </p>
                  <div className="accordion" id="accordionExample">
                    {proThirdAccordia1.map((value, index) => (
                      <div key={index}>
                        <div className="row mt-2">
                          <div className="col col-md-10">
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
                          </div>
                          <div className="col col-md-2">
                            <button
                              type="button"
                              className="btn btn-danger"
                              onClick={(e) => deleteAccordian(e, index)}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                    <Link to={`/admin-product/accordian-add/${key}`}>
                      <button type="button" className="btn btn-primary mt-3">
                        Add New
                      </button>
                    </Link>
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
                  {update ? (
                    <input
                      className="form-control"
                      type="file"
                      name="proFourthCards1img"
                      onChange={(e) => setproFourthCards1img(e.target.files[0])}
                    />
                  ) : (
                    <img
                      src={`http://localhost:5000/images/${proFourthCards1img1}`}
                      className={proFourthCards1img1}
                      alt={proFourthCards1img1}
                    />
                  )}
                </div>
                <div className="product-first-comp">
                  <h5>
                    {update ? (
                      <textarea
                        className="form-control"
                        value={proFourthCards1title1}
                        onChange={(e) =>
                          setproFourthCards1title(e.target.value)
                        }
                      ></textarea>
                    ) : (
                      proFourthCards1title1
                    )}
                  </h5>
                  <p>
                    {update ? (
                      <textarea
                        className="form-control"
                        value={proFourthCards1desc1}
                        onChange={(e) => setproFourthCards1desc(e.target.value)}
                      ></textarea>
                    ) : (
                      proFourthCards1desc1
                    )}
                  </p>
                </div>
              </div>
              <div className="col-md-3 py-3">
                <div className="product-first-img">
                  {update ? (
                    <input
                      className="form-control"
                      type="file"
                      name="proFourthCards2img"
                      onChange={(e) => setproFourthCards2img(e.target.files[0])}
                    />
                  ) : (
                    <img
                      src={`http://localhost:5000/images/${proFourthCards2img1}`}
                      className={proFourthCards2img1}
                      alt={proFourthCards2img1}
                    />
                  )}
                </div>
                <div className="product-first-comp">
                  <h5>
                    {update ? (
                      <textarea
                        className="form-control"
                        value={proFourthCards2title1}
                        onChange={(e) =>
                          setproFourthCards2title(e.target.value)
                        }
                      ></textarea>
                    ) : (
                      proFourthCards2title1
                    )}
                  </h5>
                  <p>
                    {update ? (
                      <textarea
                        className="form-control"
                        value={proFourthCards2desc1}
                        onChange={(e) => setproFourthCards2desc(e.target.value)}
                      ></textarea>
                    ) : (
                      proFourthCards2desc1
                    )}
                  </p>
                </div>
              </div>
              <div className="col-md-3 py-3">
                <div className="product-first-img">
                  {update ? (
                    <input
                      className="form-control"
                      type="file"
                      name="proFourthCards3img"
                      onChange={(e) => setproFourthCards3img(e.target.files[0])}
                    />
                  ) : (
                    <img
                      src={`http://localhost:5000/images/${proFourthCards3img1}`}
                      className={proFourthCards3img1}
                      alt={proFourthCards3img1}
                    />
                  )}
                </div>
                <div className="product-first-comp">
                  <h5>
                    {update ? (
                      <textarea
                        className="form-control"
                        value={proFourthCards3title1}
                        onChange={(e) =>
                          setproFourthCards3title(e.target.value)
                        }
                      ></textarea>
                    ) : (
                      proFourthCards3title1
                    )}
                  </h5>
                  <p>
                    {update ? (
                      <textarea
                        className="form-control"
                        value={proFourthCards3desc1}
                        onChange={(e) => setproFourthCards3desc(e.target.value)}
                      ></textarea>
                    ) : (
                      proFourthCards3desc1
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {update ? (
          <button
            onClick={updateData}
            type="button"
            className="why-razor-fix-update-btn"
          >
            Update Page
            <i className="fa-solid fa-repeat "></i>
          </button>
        ) : (
          ""
        )}
        {update ? (
          <button
            type="button"
            onClick={addData}
            className="admin-add-new-page-btn my-5"
          >
            Add New
          </button>
        ) : (
          ""
        )}
        {update ? (
          <button
            type="button"
            onClick={deleteData}
            className="admin-add-new-page-btn"
          >
            Delete Product
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
        <i className="fa-solid fa-pen-to-square"></i>
      </button>
    </>
  );
};

export default AdminProductPage;
