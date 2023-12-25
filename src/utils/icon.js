import React from "react";
import * as Icon from '@ant-design/icons';


//创建节点的方法
export function CreateIcon(name){
    return React.createElement(Icon[name]);
}
