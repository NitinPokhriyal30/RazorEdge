import React, { useState } from 'react';
import Axios from "axios";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import CKEditor from "@ckeditor/ckeditor5-react";
import { useNavigate } from 'react-router-dom';

const AdminAddNewsPage = () => {

  const navigate = useNavigate();
  const [title, setTitle] = useState("No Title Added");
  const [desc, setDesc] = useState("No Description Added");
  const [img, setImg] = useState("../../images/newsroom/blog1.png");
 
  const onChangeFile = (e) => {
    setImg(e.target.files[0]);
  };

  const postdata = () => {
    const formData = new FormData();

    formData.append("title", title);
    formData.append("desc", desc);
    formData.append("img", img);

    Axios.post("http://localhost:5000/news-get", formData);
    navigate("/admin-news");
  };

  return (
    <>
      <div className="add-new-post-sec pb-5">
        <div className="add-new-heading">
          <h2>Add New News</h2>
        </div>
        <div className="container">
          <div className="row add-new-post-rw">
            <div className="col-xl-10 col-lg-10 col-md-10">
              <form onSubmit={postdata} encType="multipart/form-data">
                <div className="mb-3 row add-new-post-sub-row">
                  <div className="col-md-2 text-end ">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Title
                    </label>
                  </div>
                  <div className="col-md-8">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Give Title to your Post"
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                </div>
                <div className="mb-3 row add-new-post-sub-row">
                  <div className="col-md-2 text-end">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Image
                    </label>
                  </div>
                  <div className="col-md-8">
                    <input
                      type="file"
                      filename="img"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Select Image (Featured).."
                      onChange={onChangeFile}
                      required
                    />
                  </div>
                </div>
                <div className="mb-3 row add-new-post-sub-row">
                  <div className="col-md-2 text-end">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Description
                    </label>
                  </div>
                  <div className="col-md-8">
                    <div className="editor">
                      <CKEditor
                        editor={ClassicEditor}
                        data={desc}
                        onChange={(event, editor) => {
                          const data = editor.getData(); 
                          setDesc(data);
                        }}
                      />
                    </div>
                    <div className="login-submit-btn">
                      <button type="submit" className="btn btn-primary">
                        ADD POST
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminAddNewsPage;
