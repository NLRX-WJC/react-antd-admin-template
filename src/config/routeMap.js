import Dashboard from "@/views/dashboard";
import Doc from "@/views/doc";
import Guide from "@/views/guide";
import RichTextEditor from "@/views/components-demo/richTextEditor";
import KeyboardChart from "@/views/charts/keyboard";
import LineChart from "@/views/charts/line";
import MixChart from "@/views/charts/mixChart";
import Menu1_1 from "@/views/nested/menu1/menu1-1"
import Menu1_2_1 from "@/views/nested/menu1/menu1-2/menu1-2-1"
import Table from "@/views/table";
import Clipboard from "@/views/clipboard";
import Error404 from '@/views/error/404'

export default [
  { path: "/dashboard", component: Dashboard, roles: ["admin"] },
  { path: "/doc", component: Doc, roles: ["admin"] },
  { path: "/guide", component: Guide, roles: ["admin"] },
  { path: "/components/richTextEditor", component: RichTextEditor, roles: ["admin"] },
  { path: "/charts/keyboard", component: KeyboardChart, roles: ["admin"] },
  { path: "/charts/line", component: LineChart, roles: ["admin"] },
  { path: "/charts/mix-chart", component: MixChart, roles: ["admin"] },
  { path: "/nested/menu1/menu1-1", component: Menu1_1, roles: ["admin"] },
  { path: "/nested/menu1/menu1-2/menu1-2-1", component: Menu1_2_1, roles: ["admin"] },
  { path: "/table", component: Table, roles: ["admin"] },
  { path: "/clipboard", component: Clipboard, roles: ["admin"] },
  { path: "/error/404", component: Error404 },
];
