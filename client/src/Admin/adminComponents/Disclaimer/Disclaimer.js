import React, { useState } from "react";
import Axios from "axios";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import CKEditor from "@ckeditor/ckeditor5-react";
import parse from "html-react-parser";
import { useNavigate } from "react-router-dom";

const Disclaimer = (props) => {

    const navigate = useNavigate();
    const [title1, setTitle] = useState(props.title);
    const [desc1, setDesc] = useState(props.desc);

    const [update, setupdate] = useState(false);

    const updateData = async () => {
        const data = {
            title: title1,
            desc: desc1,
            id: props.id,
        };

        Axios.put(`http://localhost:5000/disclaimer/`, data); 
        window.location.reload()
        navigate("/admin-disclaimer");
    };

    return (
      <>
        <div>
          <div className="disclaimer-head-sec">
            <h2>
              {update ? (
                <textarea
                  className="form-control"
                  value={title1}
                  onChange={(e) => setTitle(e.target.value)}
                ></textarea>
              ) : (
                title1
              )}
            </h2>
          </div>

          <div className="accept-of-terms-sec">
            <div className="container">
              <div className="accept-of-terms-txt-container"> 
                <h3>Acceptance of Terms</h3>
                  {update ? (
                    <div className="editor">
                      <CKEditor
                        editor={ClassicEditor}
                        data={desc1}
                        onChange={(event, editor) => {
                          const data = editor.getData();
                          setDesc(data);
                        }}
                      />
                    </div>
                  ) : (
                    <div>
                      <div>{parse(desc1)}</div>
                    </div>
                  )}
              </div>
            </div>
          </div>
        </div>
        {update ? <button onClick={() => updateData()}>Update</button> : ""}
        <button onClick={() => setupdate(true)}>Edit</button>
      </>
    );
}

export default Disclaimer