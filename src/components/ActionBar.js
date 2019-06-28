import React from "react";
import "./ActionBar.scss";

import { FaSave, FaPlus } from "react-icons/fa";

const ActionBar = () => {
  return (
    <div id="action-bar">
      <FaPlus title="Add Template" />
      <FaSave title="Save Template" />
    </div>
  );
};

export default ActionBar;
