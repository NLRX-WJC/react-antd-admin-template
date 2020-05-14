import React, { Component } from "react";
import TagList from "@/components/TagList";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars";

class Tags extends Component {
  // componentWillMount() {
  //   const { addTaglist } = this.props,
  //     currentPath = this.props.history.location.pathname; //当前页面路径
  //   // 当页面初始化时，添加tag
  //   const catchTaglist = JSON.parse(localStorage.getItem("taglist"));

  //   //  先给taglist添加当前页面对应的tag
  //   addTaglist(currentPath);
  //   // 如果缓存中有taglist列表 读取改列表并添加
  //   if (catchTaglist && catchTaglist.length) {
  //     catchTaglist.forEach((ele) => {
  //       addTaglist(ele.path);
  //     });
  //   }
  // }

  render() {
    const { taglist, history } = this.props;
    const currentPath = history.location.pathname;
    return (
      <Scrollbars autoHide autoHideTimeout={1000} autoHideDuration={200}>
        <ul className="tags-wrap">
          {taglist.map((tag) => (
            <li key={tag.path}>
              <TagList selected={tag.path === currentPath} tag={tag} />
            </li>
          ))}
        </ul>
      </Scrollbars>
    );
  }
}
export default withRouter(connect((state) => state.tagsView)(Tags));
