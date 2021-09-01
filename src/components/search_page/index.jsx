import React from "react";
import SearchSection from "./searchSection";
import AboutSection from "./aboutSection";
import CommunitySection from "./communitySection";
import "./index.css";
const Search_Page = () => {
  return (
    <div className="container-fluid search_page">
      <SearchSection />
      <AboutSection />
      <CommunitySection />
    </div>
  );
};
export default Search_Page;
