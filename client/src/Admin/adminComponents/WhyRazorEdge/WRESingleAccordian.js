import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

const WRESingleAccordian = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState({});
    const [accordianHeading, setAccordianHeading] = useState("");
    const [accordianDecs, setAccordianDecs] = useState("");

    useEffect(() => {
        const getData = async () => {
            const res = await Axios.get(
                "http://localhost:5000/wreaccordian/" + id 
            );
            setData(res.data);
            setAccordianHeading(res.data.accordianHeading);
            setAccordianDecs(res.data.accordianDecs);
        };
        getData();
    }, [id]);

    const updateData = async () => {
        try {
          await Axios.put(`http://localhost:5000/wreaccordian/${data._id}`, {
            accordianHeading,
            accordianDecs,
          });
          navigate("/admin-product");
        } catch (err) {
          console.log(err);
        }
      };
    
      const deleteData = () => {
        Axios.delete(`http://localhost:5000/wreaccordian/${data._id}`).then(
          (res) => navigate("/admin-why-razor-edge")
        );
      };
    
      const addNew = () => {
        navigate("/admin-why-razor-edge/accordian-add");
      };

    return (
        <>
            <div className="add-new-post-sec pb-5">
                <div className="add-new-heading">
                    <h2>Edit</h2>
                </div>
                <div className="container">
                    <div className="row add-new-post-rw">
                        <div className="col-xl-10 col-lg-10 col-md-10">
                            <div className="mb-3 row add-new-post-sub-row">
                                <div className="col-md-8">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        value={accordianHeading}
                                        onChange={(e) => setAccordianHeading(e.target.value)}
                                    />
                                </div>
                                <div className="col-md-8">
                                    <textarea
                                        type="text"
                                        className="form-control txtarea"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        onChange={(e) => setAccordianDecs(e.target.value)}
                                        value={accordianDecs}
                                    ></textarea>
                                    <div className="login-submit-btn pt-3">
                                        <button
                                            onClick={() => updateData()}
                                            className="btn btn-success"
                                        >
                                            Update
                                        </button>
                                        <button
                                            onClick={() => deleteData()}
                                            className="btn btn-danger mx-2"
                                        >
                                            Delete
                                        </button>
                                        <button
                                            onClick={() => addNew()}
                                            className="btn btn-primary"
                                        >
                                            Add New
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WRESingleAccordian 