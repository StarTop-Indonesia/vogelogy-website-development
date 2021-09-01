import React from "react";
import "./aboutSection.css";
const aboutSection = () => {
  return (
    <div id="about">
      <a className="logo" href="/">
        <img src="/asset/other_img/Logo_vogelogy_164px.png" alt="Vogelogy Logo" className="me-5" />
        <span>Vogelogy</span>
      </a>
      <div className="text-under-logo">
        <p>Vogelogy is a platform to help you to find many kinds of birds with artificial intelligent based on Website</p>
      </div>
      <div className="visitor">
        <p>Website visitor</p>
        <h1>1233123</h1>
        <p>Thank u for visiting vogelogy</p>
      </div>
    </div>
  );
};
export default aboutSection;
