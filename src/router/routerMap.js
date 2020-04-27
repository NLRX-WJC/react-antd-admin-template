import Home from '../views/home';
import Doc from '../views/doc';
export default [
  { path: "/home", title: "首页", component: Home , roles: ['admin','editor']},
  { path: "/doc", title: "文档", component: Doc ,roles: ['admin','editor']},
  
]