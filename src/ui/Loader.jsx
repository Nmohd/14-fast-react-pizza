import React from "react";

const Loader = () => {
  return (
    <div className="bg-state-200/20 absolute inset-0 flex items-center justify-center backdrop-blur-sm">
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
