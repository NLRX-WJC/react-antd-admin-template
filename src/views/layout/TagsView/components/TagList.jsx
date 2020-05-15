import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars";
import { Tag } from "antd";
import { deleteTaglist } from "@/store/actions";

class TagList extends Component {
  handleClose = (tag) => {
    const { history, deleteTaglist, taglist } = this.props;
    const path = tag.path;
    const currentPath = history.location.pathname;
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
  handleClick = (path) => {
    this.props.history.push(path);
  };
  render() {
    const { taglist, history } = this.props;
    const currentPath = history.location.pathname;
    return (
      <Scrollbars
        autoHide
        autoHideTimeout={1000}
        autoHideDuration={200}
        hideTracksWhenNotNeeded={true}
        renderView={props => <div {...props} className="scrollbar-container" />}
        renderTrackVertical={props => <div {...props} className="scrollbar-track-vertical"/>}
      >
        <ul className="tags-wrap">
          {taglist.map((tag) => (
            <li key={tag.path}>
              <Tag
                onClose={this.handleClose.bind(null, tag)}
                closable={tag.path !== "/dashboard"}
                color={currentPath === tag.path ? "geekblue" : "gold"}
                onClick={this.handleClick.bind(null, tag.path)}
              >
                {tag.title}
              </Tag>
            </li>
          ))}
        </ul>
      </Scrollbars>
    );
  }
}
export default withRouter(
  connect((state) => state.tagsView, { deleteTaglist })(TagList)
);
