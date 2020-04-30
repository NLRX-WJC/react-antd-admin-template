import Dashboard from "@/views/dashboard";
import Doc from "@/views/doc";
import KeyboardChart from "@/views/charts/keyboard.jsx";
import LineChart from "@/views/charts/line.jsx";
import Error404 from '@/views/error/404'

export default [
  { path: "/dashboard", component: Dashboard, roles: ["admin"] },
  { path: "/doc", component: Doc, roles: ["aaa"] },
  { path: "/charts/keyboard", component: KeyboardChart, roles: ["admin"] },
  { path: "/charts/line", component: LineChart, roles: ["admin"] },
  { path: "/charts/mix-chart", component: Doc, roles: ["admin"] },
  { path: "/error/404", component: Error404 },
];
