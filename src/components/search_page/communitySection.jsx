import React from "react";
import "./communitySection.css";
const communitySection = () => {
  return (
    <div id="community">
      <div className="community-wrapper d-flex">
        <div className="developer-wrapper col-4">
          <div className="startop-logo">
            <a href="/">
              <img src="/asset/other_img/Logo_StarTop_ID.png" alt="StarTop ID Logo" />
            </a>
          </div>
          <div className="developer">
            <ul>
              <li>
                <a href="#">M Alfarizi Tazkia</a>
              </li>
              <li>
                <a href="#">M Afif</a>
              </li>
              <li>
                <a href="#">M Khoirurrizqi</a>
              </li>
              <li>
                <a href="#">Fajari B</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="socmed-wrapper col-8">
          <div className="donation">
            <p>The project is supported by user donations</p>
            <p>Send your contribution to the Bitcoin address:</p>
            <p>
              <strong>0x2AA26FedD6a734ABfe205dB57224E24F2611C3d2</strong>
            </p>
            <p>Send your contribution to the Saweria:</p>
            <a href="https://saweria.com/startop">
              <strong>Startop Indonesia</strong>
            </a>
          </div>
          <div className="socmed">
            <a href="#" className="facebook">
              <img src="./asset/other_img/facebook.png" alt="" />
            </a>
            <a href="#" className="twitter">
              <img src="./asset/other_img/twitter.png" alt="" />
            </a>
            <a href="#" className="instagram">
              <img src="./asset/other_img/instagram.png" alt="" />
            </a>
            <a href="#" className="linkedin">
              <img src="./asset/other_img/linkedin.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default communitySection;
