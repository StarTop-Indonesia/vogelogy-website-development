import React from "react";
import "./searchBar.css";
const searchBar = () => {
  return (
    <div className="search-wrapper d-flex row">
      <div className="search-column col-9">
        <form action="" className="col-12">
          <input type="text" name="" id="" placeholder="Search with bird name ..." />
        </form>
      </div>
      <div className="icon-wrapper justify-content-end col-3 justify-content-around">
        <a href="#" className="camera-icon">
          <img src="/asset/other_img/camera-icon.png" alt="Camera Icon" />
        </a>
        <a href="#" className="search-icon">
          <img src="/asset/other_img/search-icon.png" alt="Search Icon" />
        </a>
      </div>
    </div>
  );
};
export default searchBar;
