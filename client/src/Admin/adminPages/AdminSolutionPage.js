import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminSolutionPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [key, setkey] = useState("");
  const [pageName1, setpageName] = useState("");
  const [pageDesc1, setpageDesc] = useState("");
  const [sol2FirstMainSubHeading1, setsol2FirstMainSubHeading] = useState("");
  const [sol2FirstMaiHeading1, setsol2FirstMaiHeading] = useState("");
  const [sol2FirstMainPera1, setsol2FirstMainPera] = useState("");

  const [sol2FirstImage1, setsol2FirstImage] = useState("");
  const [sol2FirstHeading1, setsol2FirstHeading] = useState("");
  const [sol2FirstPera1, setsol2FirstPera] = useState("");

  const [sol2SecondHeading1, setsol2SecondHeading] = useState("");
  const [sol2SecondPera1, setsol2SecondPera] = useState("");

  const [sol2ThirdImage1, setsol2ThirdImage] = useState("");
  const [sol2ThirdHeading1, setsol2ThirdHeading] = useState("");
  const [sol2ThirdPera1, setsol2ThirdPera] = useState("");

  const [sol2FourthHeading1, setsol2FourthHeading] = useState("");
  const [sol2FourthBtnTxt1, setsol2FourthBtnTxt] = useState("");
  const [sol2FourthPera1, setsol2FourthPera] = useState("");

  const [update, setupdate] = useState(false);


  useEffect(() => {
    const get = async () => {
      const res = await Axios.get("http://localhost:5000/solution2-get/" + id);
      setkey(res.data._id);
      setData(res.data);
      setpageName(res.data.pageName);
      setpageDesc(res.data.pageDesc);
      setsol2FirstMainSubHeading(res.data.sol2FirstMainSubHeading);
      setsol2FirstMaiHeading(res.data.sol2FirstMaiHeading);
      setsol2FirstMainPera(res.data.sol2FirstMainPera);
      setsol2FirstHeading(res.data.sol2FirstHeading);
      setsol2FirstPera(res.data.sol2FirstPera);
      setsol2SecondHeading(res.data.sol2SecondHeading);
      setsol2SecondPera(res.data.sol2SecondPera);
      setsol2ThirdHeading(res.data.sol2ThirdHeading);
      setsol2ThirdPera(res.data.sol2ThirdPera);
      setsol2FourthHeading(res.data.sol2FourthHeading);
      setsol2FourthBtnTxt(res.data.sol2FourthBtnTxt);
      setsol2FourthPera(res.data.sol2FourthPera);
      setsol2FirstImage(res.data.sol2FirstImage);
      setsol2ThirdImage(res.data.sol2ThirdImage);
    };
    get();
  }, [id]);

  const updateData = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("pageName", pageName1);
    formData.append("pageDesc", pageDesc1);
    formData.append("sol2FirstMainSubHeading", sol2FirstMainSubHeading1);
    formData.append("sol2FirstMaiHeading", sol2FirstMaiHeading1);
    formData.append("sol2FirstMainPera", sol2FirstMainPera1);
    formData.append("sol2FirstHeading", sol2FirstHeading1);
    formData.append("sol2FirstPera", sol2FirstPera1);
    formData.append("sol2SecondHeading", sol2SecondHeading1);
    formData.append("sol2SecondPera", sol2SecondPera1);
    formData.append("sol2ThirdHeading", sol2ThirdHeading1);
    formData.append("sol2ThirdPera", sol2ThirdPera1);
    formData.append("sol2FourthHeading", sol2FourthHeading1);
    formData.append("sol2FourthBtnTxt", sol2FourthBtnTxt1);
    formData.append("sol2FourthPera", sol2FourthPera1);

    formData.append("sol2FirstImage", sol2FirstImage1);
    formData.append("sol2FirstImageFilename", sol2FirstImage1.name);
    formData.append("sol2ThirdImage", sol2ThirdImage1);
    formData.append("sol2ThirdImageFilename", sol2ThirdImage1.name);
    formData.append("id", data._id);

    await Axios.put("http://localhost:5000/solution2-update", formData);
    window.location.reload();
    // navigate("/admin-dashboard");
  };

  const addData = (e) => {
    navigate("/admin-solution-add");
  };

  const deleteData = () => {
    Axios.delete(`http://localhost:5000/solution2-delete/${key}`);
    navigate("/admin-dashboard");
  };

  return (
    <>
      <form onSubmit={updateData} encType="multipart/form-data">
        <div className="investor-sentiment-sec">
          <div className="container">
            <div className="row">
              <div className="invester-inner-txt-container">
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
                <h3>
                  {update ? (
                    <textarea
                      value={sol2FirstMainSubHeading1}
                      onChange={(e) =>
                        setsol2FirstMainSubHeading(e.target.value)
                      }
                    ></textarea>
                  ) : (
                    sol2FirstMainSubHeading1
                  )}
                </h3>
                <h2>
                  {update ? (
                    <textarea
                      value={sol2FirstMaiHeading1}
                      onChange={(e) => setsol2FirstMaiHeading(e.target.value)}
                    ></textarea>
                  ) : (
                    sol2FirstMaiHeading1
                  )}
                </h2>
                <p>
                  {update ? (
                    <textarea
                      value={sol2FirstMainPera1}
                      onChange={(e) => setsol2FirstMainPera(e.target.value)}
                    ></textarea>
                  ) : (
                    sol2FirstMainPera1
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bullets-point-sec integration-data-sec solution-investor-sec">
          <div className="container">
            <div className="row">
              <div className=" col-lg-6 col-md-6 integration-data-col pb-3">
                <div className="bullet-img-sec">
                  {update ? (
                    <input
                      className="form-control"
                      type="file"
                      name="sol2FirstImage"
                      onChange={(e) => setsol2FirstImage(e.target.files[0])}
                    />
                  ) : (
                    <img
                      src={`http://localhost:5000/images/${sol2FirstImage1}`}
                      className="whyUs"
                      alt="whyUs"
                    />
                  )}
                </div>
              </div>
              <div className=" col-lg-6 col-md-6 m-auto">
                <div className="integration-data-txt-container">
                  <h3>
                    {update ? (
                      <textarea
                        value={sol2FirstHeading1}
                        onChange={(e) => setsol2FirstHeading(e.target.value)}
                      ></textarea>
                    ) : (
                      sol2FirstHeading1
                    )}
                  </h3>
                  <p>
                    {update ? (
                      <textarea
                        value={sol2FirstPera1}
                        onChange={(e) => setsol2FirstPera(e.target.value)}
                      ></textarea>
                    ) : (
                      sol2FirstPera1
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="unlock-the-value-sec">
          <div className="unlock-the-value-txt-container solution-unlock-the-value">
            <h2>
              {update ? (
                <textarea
                  value={sol2SecondHeading1}
                  onChange={(e) => setsol2SecondHeading(e.target.value)}
                ></textarea>
              ) : (
                sol2SecondHeading1
              )}
            </h2>
            <p>
              {update ? (
                <textarea
                  value={sol2SecondPera1}
                  onChange={(e) => setsol2SecondPera(e.target.value)}
                ></textarea>
              ) : (
                sol2SecondPera1
              )}
            </p>
          </div>
        </div>
        <div className="bullets-point-sec solution-connect-sec">
          <div className="container">
            <div className="row">
              <div className=" col-lg-6 col-md-6 integration-data-col">
                <div className="bullet-img-sec">
                  {update ? (
                    <input
                      className="form-control"
                      type="file"
                      name="sol2ThirdImage"
                      onChange={(e) => setsol2ThirdImage(e.target.files[0])}
                    />
                  ) : (
                    <img
                      src={`http://localhost:5000/images/${sol2ThirdImage1}`}
                      className="bulletsImg"
                      alt="bulletsImg"
                    />
                  )}
                </div>
              </div>
              <div className=" col-lg-6 col-md-6 m-auto">
                <div className="integration-data-txt-container connect-tool">
                  <h3>
                    {update ? (
                      <textarea
                        value={sol2ThirdHeading1}
                        onChange={(e) => setsol2ThirdHeading(e.target.value)}
                      ></textarea>
                    ) : (
                      sol2ThirdHeading1
                    )}
                  </h3>
                  <p>
                    {update ? (
                      <textarea
                        value={sol2ThirdPera1}
                        onChange={(e) => setsol2ThirdPera(e.target.value)}
                      ></textarea>
                    ) : (
                      sol2ThirdPera1
                    )}
                  </p>
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
                  <h3>
                    {update ? (
                      <textarea
                        value={sol2FourthHeading1}
                        onChange={(e) => setsol2FourthHeading(e.target.value)}
                      ></textarea>
                    ) : (
                      sol2FourthHeading1
                    )}
                  </h3>
                  {/* <Link className="footer-register-btn stay-update-btn" to="/"> */}
                  <button type="button" className="btn btn-primary">
                    {update ? (
                      <textarea
                        value={sol2FourthBtnTxt1}
                        onChange={(e) => setsol2FourthBtnTxt(e.target.value)}
                      ></textarea>
                    ) : (
                      sol2FourthBtnTxt1
                    )}
                  </button>
                  {/* </Link> */}
                </div>
              </div>
              <div className="col-md-6">
                <div className="stay-update-txt">
                  <p>
                    {update ? (
                      <textarea
                        value={sol2FourthPera1}
                        onChange={(e) => setsol2FourthPera(e.target.value)}
                      ></textarea>
                    ) : (
                      sol2FourthPera1
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {update ? (
          <button
            type="submit"
            // onClick={updateData}
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
            className="admin-add-new-page-btn"
          >
            Add New Page
          </button>
        ) : (
          ""
        )}
        {update ? (
          <button
            type="button"
            onClick={deleteData}
            className="admin-add-new-page-btn my-5"
          >
            Delete Page
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

export default AdminSolutionPage;
