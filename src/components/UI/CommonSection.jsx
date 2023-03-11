import React from "react";
import "../../Styles/common-section.css";

const CommonSection = ({ title }) => {
  return (
    <section className="common__section mb-5">
      <div className="text-center">
        <h1 className="text-light">{title}</h1>
      </div>
    </section>
  );
};

export default CommonSection;
