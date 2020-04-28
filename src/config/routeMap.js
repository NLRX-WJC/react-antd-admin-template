import Home from "@/views/home";
import Doc from "@/views/doc";
import Error404 from '@/views/error/404'

export default [
  { path: "/home", component: Home, roles: ["admin"] },
  { path: "/doc", component: Doc, roles: ["admin"] },
  { path: "/error/404", component: Error404 },
];
