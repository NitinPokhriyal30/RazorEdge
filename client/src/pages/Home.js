import React, { useEffect, useState } from "react";
import Axios from "axios";
import BulletSection from "../components/BulletSection";
import Testimonial from "../components/Testimonial";
import OurSolutions from "../components/OurSolutions";
import HeroSection from "../components/heroSection/HeroSection";
import OurProducts from "../components/OurProducts";

const Home = () => {

  const [solutionData, setSolutionData] = useState([]);    
  const [whyRazorEdge, setWhyRazorEdge] = useState([]); 

  useEffect(() => {
    Axios.get("http://localhost:5000/home-get").then((res) =>
    setSolutionData(res.data), 
    );

    Axios.get("http://localhost:5000/why-razor-edge-get").then((res) =>
    setWhyRazorEdge(res.data),
    );

  }, []); 

  return (
    <>
      <HeroSection />
      <BulletSection />
      {solutionData.map((value, index) => (
        <OurSolutions
          key={index}
          heading={value.ourSolutions.heading}
          subheading={value.ourSolutions.subheading}
          image={value.ourSolutions.solutionimage}
          mainheading={value.ourSolutions.mainheading}
          pera={value.ourSolutions.pera}
        />
      ))}
      <OurProducts />
      {whyRazorEdge.map((value, index) => (
        <Testimonial
          key={index}
          WRESec5Subheading={value.whyRazorEdgeFifthSection.WRESec5Subheading}
          WRESec5btntxt={value.whyRazorEdgeFifthSection.WRESec5btntxt}
          WRESec5heading={value.whyRazorEdgeFifthSection.WRESec5heading}
          WRESec3Slider={value.whyRazorEdgeFifthSection.WRESec3Slider}
        />
      ))}
    </>
  );
};

export default Home;
