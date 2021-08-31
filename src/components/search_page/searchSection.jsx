import React from "react";
import "./searchSection.css";
import SearchBar from "./searchBar";
const searchSection = () => {
  return (
    <div id="search" className="text-start">
      <div id="text">
        <h1>you can't fly like a birds, but you can find it</h1>
        <p>Vogelogy help you to find the birds easily, just type the bird what you want or you can find it with your photo by clicking icon</p>
        <a href="#about">About Vogelogy</a>
      </div>
      <div id="search-bar" className="justify-content-center d-flex">
        <SearchBar />
      </div>
    </div>
  );
};
export default searchSection;
