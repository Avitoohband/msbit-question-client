import React from "react";

const FlexContainer = ({ children, className }) => {
  return (
    <div
      className={`d-flex justify-content-center align-items-center my-2 gap-2 flex ${className}`}
    >
      {children}
    </div>
  );
};

export default FlexContainer;
