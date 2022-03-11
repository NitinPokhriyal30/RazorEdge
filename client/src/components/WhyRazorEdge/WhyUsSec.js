import React from 'react';

const WhyUsSec = (props) => {

  const {WRESec1subheading, WRESec1heading, WRESec1image} = props

  return (
    <>
      <div className="why-us-sec ">
        <div className="container">
          <div className="our-solution-head text-center py-5">
            <h3 className="text-uppercase">{WRESec1subheading}</h3>
            <h2>{WRESec1heading}</h2>
          </div>
        </div>
        <div className="empty-div"></div>
        <div className="container">
          <div className="why-us-img-container text-center">
            <img
              src={`http://localhost:5000/images/${WRESec1image}`}
              className="whyUs"
              alt="whyUs"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyUsSec;
