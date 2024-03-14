import React from "react";
import { Helmet } from "react-helmet";

const Head = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
      {/* Add any additional meta tags or links here if needed */}
    </Helmet>
  );
};

export default Head;
