import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <h1>articles</h1>
      <main>{children}</main>
    </div>
  );
};

export default layout;
