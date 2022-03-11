import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

const ClientPage = (props) => {
  const [clientGallery, setClientGallery] = useState([]);
  const [heading, setHeading] = useState(props.heading);
  const [subheading, setSubheading] = useState(props.subheading);
  const [pera, setPera] = useState(props.pera);

  const [update, setupdate] = useState(false);

  useEffect(() => {
    Axios.get("http://localhost:5000/clientgallery").then((res) =>
      setClientGallery(res.data)
    );
  }, []);

  const updateData = () => {
    const data = {
      heading,
      subheading,
      pera,
      _id: props.id,
    };
    Axios.put("http://localhost:5000/clientPage", data).then((res) =>
      window.location.reload()
    );
  };

  return (
    <>
      <div className="our-client-sec">
        <div className="container">
          <div className="our-client-txt-container">
            <h3>
              {update ? (
                <input
                  type="text"
                  className="form-control"
                  value={subheading}
                  onChange={(e) => setSubheading(e.target.value)}
                ></input>
              ) : (
                subheading
              )}
            </h3>
            <h2>
              {update ? (
                <input
                  type="text"
                  className="form-control"
                  value={heading}
                  onChange={(e) => setHeading(e.target.value)}
                ></input>
              ) : (
                heading
              )}
            </h2>
          </div>
        </div>
      </div>

      <div className="client-text-component">
        <div className="container">
          <div className="row client-text-component-rw">
            <div className="col-xl-10">
              <div className="client-inner-txt-container">
                <p>
                  {update ? (
                    <textarea
                      type="text"
                      className="form-control txtarea"
                      value={pera}
                      onChange={(e) => setPera(e.target.value)}
                    ></textarea>
                  ) : (
                    pera
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {update ? (
        <button
          onClick={() => updateData()}
          className="why-razor-fix-update-btn "
        >
          Update Page <i className="fa-solid fa-repeat "></i>
        </button>
      ) : (
        ""
      )}
      <button
        onClick={() => setupdate(true)}
        className="why-razor-fix-edit-btn"
      >
        Edit Page <i className="fa-solid fa-pen-to-square"></i>
      </button>

      <div className="client-img-gallery">
        <div className="container-fluid p-0">
          <div className="row p-0 gx-0 gy-0">
            {clientGallery
              .map((value, index) => (
                <div
                  className="col-xl-6 col-lg-6 col-md-6 client-img-col"
                  key={index}
                >
                  <div className="content">
                    <div className="content-overlay"></div>
                    <img
                      src={`http://localhost:5000/images/${value.img}`}
                      className="contentImage2"
                      alt="contentImage2"
                    />
                    <div className="content-details fadeIn-bottom">
                      <h3 className="content-title">{value.heading}</h3>
                      <p className="content-text">{value.desc}</p>
                      <Link
                        to={`/admin-client/${value._id}`}
                        className="client-admin-btn"
                      >
                        Edit
                        <i className="fa-solid fa-pen-to-square"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              ))
              .reverse()
              .slice(0, 2)}
            {clientGallery
              .map((value, index) => (
                <div
                  className="col-xl-4 col-lg-4 col-md-4 client-img-col"
                  key={index}
                >
                  <div className="content">
                    <div className="content-overlay"></div>
                    <img
                      src={`http://localhost:5000/images/${value.img}`}
                      className="contentImage3"
                      alt="contentImage3"
                    />
                    <div className="content-details fadeIn-bottom">
                      <h3 className="content-title">{value.heading}</h3>
                      <p className="content-text">{value.desc}</p>
                      <Link
                        to={`/admin-client/${value._id}`}
                        className="client-admin-btn"
                      >
                        Edit
                        <i className="fa-solid fa-pen-to-square"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              ))
              .slice(0, -2)
              .reverse()}
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientPage;
