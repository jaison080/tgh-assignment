import React from "react";
import { PropagateLoader } from "react-spinners";
import "./Loader.css";

function Loader() {
  return (
    <div className="loader__container">
      <PropagateLoader color="#d05252" size={20} />
    </div>
  );
}

export default Loader;
