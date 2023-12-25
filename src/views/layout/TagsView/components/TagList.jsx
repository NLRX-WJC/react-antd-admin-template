import React, {useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { useLocation, useNavigate } from "react-router-dom";
// import withRouter from "@/utils/router";
// import { Scrollbars } from "react-custom-scrollbars";
import { Tag } from "antd";
import { deleteTag, emptyTaglist, closeOtherTags } from "@/store/actions";
const TagList = () => {
  const tagListContainer = React.createRef();
  const contextMenuContainer = React.createRef();
  // state = {
  //   left: 0,
  //   top: 0,
  //   menuVisible: false,
  // };

  const [state, setState] = useState({
    left: 0,
    top: 0,
    menuVisible: false,
  });

  // 页面初始化时，开始渲染图表

  useEffect(() => {
    document.body.addEventListener("click", handleClickOutside);

    return () =>{
      document.body.removeEventListener("click", handleClickOutside);
    };

  }, []);



  const globalTagsView = useSelector((state) => state.tagsView);
  const { taglist } = globalTagsView;
  const { left, top, menuVisible } = state;


  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentPath = location.pathname;

  const handleClose = (tag) => {

    const path = tag.path;
    const length = taglist.length;
    // 如果关闭的是当前页，跳转到最后一个tag
    if (path === currentPath) {
      navigate(taglist[length - 1].path);
    }
    // 如果关闭的是最后的tag ,且当前显示的也是最后的tag对应的页面，才做路由跳转
    if (  path === taglist[length - 1].path && currentPath === taglist[length - 1].path ) {
      // 因为cutTaglist在最后执行，所以跳转到上一个tags的对应的路由，应该-2
      if (length - 2 > 0) {
        navigate(taglist[length - 2].path);
      } else if (length === 2) {
        navigate(taglist[0].path);
      }
    }

    // 先跳转路由，再修改state树的taglist
    dispatch(deleteTag(tag));
  };
  const handleClick = (path) => {
    navigate(path);
  };
  const openContextMenu = (tag, event) => {
    event.preventDefault();
    const menuMinWidth = 105;
    const clickX = event.clientX;
    const clickY = event.clientY; //事件发生时鼠标的Y坐标
    const clientWidth = tagListContainer.current.clientWidth; // container width
    const maxLeft = clientWidth - menuMinWidth; // left boundary

    // 当鼠标点击位置大于左侧边界时，说明鼠标点击的位置偏右，将菜单放在左边
    if (clickX > maxLeft) {
      setState({
        left: clickX - menuMinWidth + 15,
        top: clickY,
        menuVisible: true,
        currentTag: tag,
      });
    } else {
      // 反之，当鼠标点击的位置偏左，将菜单放在右边
      setState({
        left: clickX,
        top: clickY,
        menuVisible: true,
        currentTag: tag,
      });
    }
  };
  const handleClickOutside = (event) => {
    const { menuVisible } = state;
    const isOutside = !(
      contextMenuContainer.current &&
      contextMenuContainer.current.contains(event.target)
    );
    if (isOutside && menuVisible) {
      closeContextMenu();
    }
  };
  function closeContextMenu() {
    setState({
      ...state,
      menuVisible: false,
    });
  }
  // componentDidMount() {
  //   document.body.addEventListener("click", this.handleClickOutside);
  // }
  // componentWillUnmount() {
  //   document.body.removeEventListener("click", this.handleClickOutside);
  // }
  const handleCloseAllTags = () => {
    dispatch(emptyTaglist());
    navigate("/dashboard");
    closeContextMenu();
  };
  const handleCloseOtherTags = () => {
    const currentTag = state.currentTag;
    const { path } = currentTag;
    dispatch(closeOtherTags(currentTag))
    navigate(path);
    closeContextMenu();
  };

  return (
    <>
      {/* <Scrollbars
          autoHide
          autoHideTimeout={1000}
          autoHideDuration={200}
          hideTracksWhenNotNeeded={true}
          renderView={(props) => (
            <div {...props} className="scrollbar-container" />
          )}
          renderTrackVertical={(props) => (
            <div {...props} className="scrollbar-track-vertical" />
          )}
        > */}
      <ul className="tags-wrap" ref={tagListContainer}>
        {taglist.map((tag) => (
          <li key={tag.path}>
            <Tag
              onClose={handleClose.bind(null, tag)}
              closable={tag.path !== "/dashboard"}
              color={currentPath === tag.path ? "geekblue" : "gold"}
              onClick={handleClick.bind(null, tag.path)}
              onContextMenu={openContextMenu.bind(null, tag)}
            >
              {tag.title}
            </Tag>
          </li>
        ))}
      </ul>
      {/* </Scrollbars> */}
      {menuVisible ? (
        <ul
          className="contextmenu"
          style={{ left: `${left}px`, top: `${top}px` }}
          ref={contextMenuContainer}
        >
          <li onClick={handleCloseOtherTags}>关闭其他</li>
          <li onClick={handleCloseAllTags}>关闭所有</li>
        </ul>
      ) : null}
    </>
  );
}

export default TagList;
