import React from "react";
import { withRouter } from "react-router-dom";
import Tags from "./components/Tags";
// import Dropdown from "./component/Dropdown";
import "./index.less";

const TagsView = () => {
  return (
      <div className="tags-row-wrap">
        <Tags />
        {/* <Dropdown /> */}
      </div>
  );
};

export default withRouter(TagsView);
