import React, { useState, useEffect } from "react";
import { Menu } from "antd";
import Icon from '@ant-design/icons'
import * as icons from '@ant-design/icons';
import { useLocation, Link } from "react-router-dom";

import withRouter from "@/utils/router";
// import { Scrollbars } from "react-custom-scrollbars";
import { useDispatch, useSelector } from "react-redux";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { addTag } from "@/store/actions";
import { getMenuItemInMenuListByProperty } from "@/utils";
import menuList from "@/config/menuConfig";
import "./index.less";
const SubMenu = Menu.SubMenu;
// 重新记录数组顺序
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

const Menu0 = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const userState = useSelector(state => state.user);
  // let state = {
  //   menuTreeNode: null,
  //   openKey: [],
  // };

  const [state, setState] = useState({
    menuTreeNode: null,
    openKey: [],
  });


  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const menuTreeNode = getMenuNodes(menuList);
    setState({
      ...state,
      menuTreeNode,
    });
    handleMenuSelect(state.openKey);
  }, []);


  // filterMenuItem用来根据配置信息筛选可以显示的菜单项
  const filterMenuItem = (item) => {
    const { roles } = item;
    const { role } = userState;
    if (role === "admin" || !roles || roles.includes(role)) {
      return true;
    } else if (item.children) {
      // 如果当前用户有此item的某个子item的权限
      return !!item.children.find((child) => roles.includes(child.role));
    }
    return false;
  };

  const handleMenuItemClick = (menuItem) => {
    // console.log('handleMenuItemClick:%0', menuItem);
    dispatch(addTag(menuItem));
  }
  // 菜单渲染
  const getMenuNodes = (menuList) => {
    // 得到当前请求的路由路径
    const path = location.pathname;
    return menuList.reduce((pre, item) => {
      if (filterMenuItem(item)) {
        if (!item.children) {
          // console.log('item has no children:%0', item);
          pre.push(
            <Menu.Item key={item.path} onClick={handleMenuItemClick.bind(null, item)}>
              <Link to={item.path}>
                {item.icon ? <Icon component={icons[item.icon]} /> : null}
                <span>{item.title}</span>
              </Link>
            </Menu.Item>
          );
        } else {
          // console.log('item has children:%0', item);
          // 查找一个与当前请求路径匹配的子Item
          const cItem = item.children.find(
            (cItem) => path.indexOf(cItem.path) === 0
          );
          // 如果存在, 说明当前item的子列表需要打开
          if (cItem) {
            setState({
              ...state,
              openKey: [...state.openKey, item.path],
            });
          }

          // console.log('向pre添加<SubMenu>:%0', item);

          // 向pre添加<SubMenu>
          pre.push(
            <SubMenu
              key={item.path}
              title={
                <span>
                  {item.icon ? <Icon component={icons[item.icon]} /> : null}
                  <span>{item.title}</span>
                </span>
              }
            >
              {getMenuNodes(item.children)}
            </SubMenu>
          );
        }
      }

      return pre;
    }, []);
  };

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    const _items = reorder(
      state.menuTreeNode,
      result.source.index,
      result.destination.index
    );
    setState({
      menuTreeNode: _items,
    });
  };

  const handleMenuSelect = ({ key = "/dashboard" }) => {
    // console.log(`handleMenuSelect key:${key}`);
    let menuItem = getMenuItemInMenuListByProperty(menuList, "path", key);
    if (!menuItem.children) {
      dispatch(addTag(menuItem));
    }

  };



  //todo lizhiyong
  // componentWillMount() {
  //   const menuTreeNode = this.getMenuNodes(menuList);
  //   this.setState({
  //     menuTreeNode,
  //   });
  //   this.handleMenuSelect(this.state.openKey);
  // }
  const path = location.pathname;
  const openKey = state.openKey;
  // console.log('menuTreeNode:%0', state.menuTreeNode)
  return !isMounted ? null : (
    <div className="sidebar-menu-container">
      {/* <Scrollbars autoHide autoHideTimeout={1000} autoHideDuration={200}> */}
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {state.menuTreeNode && state.menuTreeNode.map((item, index) => (
                <Draggable
                  key={item.key}
                  draggableId={item.key}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Menu
                        mode="inline"
                        theme="dark"
                        onSelect={handleMenuSelect.bind(null, item)}
                        selectedKeys={[path]}
                        defaultOpenKeys={openKey}
                      >
                        {item}
                      </Menu>
                    </div>
                  )}
                </Draggable>
              ))}
            </div>
          )}



        </Droppable>
      </DragDropContext>
      {/* </Scrollbars> */}
    </div>
  );
}

export default Menu0;
