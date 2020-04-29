import Dashboard from "@/views/dashboard";
import Doc from "@/views/doc";
import Error404 from '@/views/error/404'

export default [
  { path: "/dashboard", component: Dashboard, roles: ["admin"] },
  { path: "/doc", component: Doc, roles: ["admin"] },
  { path: "/error/404", component: Error404 },
];
