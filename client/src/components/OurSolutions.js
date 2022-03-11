import React, { useEffect, useState } from "react";
import Axios from "axios";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const OurSolutions = (props) => {
  const [accordian, setAccordian] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:5000/homeaccordian").then((res) => 
      setAccordian(res.data)
    );
  }, []); 

  return (
    <>
      <div className="our-solution"> 
        <div className="container">
          <div className="row">
            <div className="our-solution-head pb-5">
              <h3>{props.subheading}</h3>
              <h2>{props.heading}</h2>
            </div>
            <div className="our-solution-txt-img-container">
              <div className="row">
                <div className="col-md-6">
                  <div className="innovation-head">
                    <h2>{props.mainheading}</h2>
                    <p>{props.pera}</p>
                  </div>
                </div>
                <div className="col-md-6 m-auto text-center ">
                  <div className="solution-img-container">
                    <img
                      src={`http://localhost:5000/images/${props.image}`}
                      className="Solution"
                      alt="Solution"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="accordian-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-6 accordion-col py-2">
              <div className="accordion" id="accordionExample">
                {accordian.map((value, index) => (
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
    </>
  );
};

export default OurSolutions;
