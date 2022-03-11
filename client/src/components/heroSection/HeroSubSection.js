import React from 'react';
import ReactPlayer from "react-player";
// import PlayIcon from "../../images/Home/play-icon.svg";

const HeroSubSection = (props) => {

  return (
    <>
      <div className="hero-sec">
        <div className="container">
          <div className="inner-sec">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 mx-auto">
                <div className="hero-txt-sec">
                  <h2>{props.heroMainHeading}</h2> 
                  <div className="button-group">
                    <a href={props.herofirstbtnUrl}>
                      <button className="register" type="button">
                        {props.herofirstbtn}
                      </button>
                    </a>
                    <a href={props.herosecondbtnUrl}>
                      <button className="sign-in" type="button">
                        {props.herosecondbtn}
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="video-container">
                  <div className="content">
                    <div className="content-overlay"></div>

                    {/* <p>{props.herovideoimage.slice(0, 4)}</p> */}
                    {props.herovideoimage.slice(0, 4) ? (
                      <div className="player-wrapper">
                        <ReactPlayer
                          playing={true}
                          // playIcon="nitin"
                          controls={true}
                          light={`http://localhost:5000/images/video-img.jpg`}
                          url={`http://localhost:5000/images/${props.herovideoimage}`}
                        />
                      </div>
                    ) : (
                      <div className="player-wrapper">
                        <ReactPlayer
                          playing={true}
                          light={`http://localhost:5000/images/video-img.jpg`}
                          url={props.herovideoimage}
                        />
                      </div>
                    )}
                    {/* <img
                      src={`http://localhost:5000/images/${props.herovideoimage}`}
                      className="VideoImg"
                      alt="VideoImg"
                    /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="investment-decesion">
        <div className="investment-decesion-txt">
          <h4>{props.herosubheading}</h4>
          <p>{props.heropera}</p>
        </div>
      </div>
    </>
  );
};
 
export default HeroSubSection;
