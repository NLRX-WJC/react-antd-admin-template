import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Tag } from "antd";
import { deleteTaglist } from "@/store/actions";

const TagList = (props) => {
  const { history, deleteTaglist, taglist, tag } = props;
  const title = tag.title;
  const path = tag.path;
  const currentPath = history.location.pathname;

  const handleClose = (path) => {
    const length = taglist.length;
    // 如果关闭的是当前页，跳转到最后一个tag
    if (path === currentPath) {
      history.push(taglist[length - 1].path);
    }
    // 如果关闭的是最后的tag ,且当前显示的也是最后的tag对应的页面，才做路由跳转
    if (
      path === taglist[length - 1].path &&
      currentPath === taglist[length - 1].path
    ) {
      // 因为cutTaglist在最后执行，所以跳转到上一个tags的对应的路由，应该-2
      if (length - 2 > 0) {
        history.push(taglist[length - 2].path);
      } else if (length === 2) {
        history.push(taglist[0].path);
      }
    }

    // 先跳转路由，再修改state树的taglist
    deleteTaglist(tag);
  };

  const handleClick = (path, event) => {
    history.push(path);
  };

  return (
    <Tag
      onClose={() => {
        handleClose(path);
      }}
      closable
      color={currentPath === path ? "geekblue" : "gold"}
      onClick={(e) => handleClick(path, e)}
    >
      {title}
    </Tag>
  );
};

export default withRouter(
  connect((state) => state.tagsView, { deleteTaglist })(TagList)
);
