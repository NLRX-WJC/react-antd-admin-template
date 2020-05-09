import Loadable from 'react-loadable';
import Loading from '@/components/Loading'
const Dashboard = Loadable({loader: () => import(/*webpackChunkName:'Dashboard'*/'@/views/dashboard'),loading: Loading});
const Doc = Loadable({loader: () => import(/*webpackChunkName:'Doc'*/'@/views/doc'),loading: Loading});
const Guide = Loadable({loader: () => import(/*webpackChunkName:'Guide'*/'@/views/guide'),loading: Loading});
const RichTextEditor = Loadable({loader: () => import(/*webpackChunkName:'RichTextEditor'*/'@/views/components-demo/richTextEditor'),loading: Loading});
const Markdown = Loadable({loader: () => import(/*webpackChunkName:'Markdown'*/'@/views/components-demo/Markdown'),loading: Loading});
const KeyboardChart = Loadable({loader: () => import(/*webpackChunkName:'KeyboardChart'*/'@/views/charts/keyboard'),loading: Loading});
const LineChart = Loadable({loader: () => import(/*webpackChunkName:'LineChart'*/'@/views/charts/line'),loading: Loading});
const MixChart = Loadable({loader: () => import(/*webpackChunkName:'MixChart'*/'@/views/charts/mixChart'),loading: Loading});
const Menu1_1 = Loadable({loader: () => import(/*webpackChunkName:'Menu1_1'*/'@/views/nested/menu1/menu1-1'),loading: Loading});
const Menu1_2_1 = Loadable({loader: () => import(/*webpackChunkName:'Menu1_2_1'*/'@/views/nested/menu1/menu1-2/menu1-2-1'),loading: Loading});
const Table = Loadable({loader: () => import(/*webpackChunkName:'Table'*/'@/views/table'),loading: Loading});
const ExportExcel = Loadable({loader: () => import(/*webpackChunkName:'ExportExcel'*/'@/views/excel/exportExcel'),loading: Loading});
const UploadExcel = Loadable({ loader: () => import(/*webpackChunkName:'UploadExcel'*/'@/views/excel/uploadExcel'),loading: Loading });
const Zip = Loadable({loader: () => import(/*webpackChunkName:'Zip'*/'@/views/zip'),loading: Loading});
const Clipboard = Loadable({loader: () => import(/*webpackChunkName:'Clipboard'*/'@/views/clipboard'),loading: Loading});
const Error404 = Loadable({loader: () => import(/*webpackChunkName:'Error404'*/'@/views/error/404'),loading: Loading});

export default [
  { path: "/dashboard", component: Dashboard, roles: ["admin"] },
  { path: "/doc", component: Doc, roles: ["admin"] },
  { path: "/guide", component: Guide, roles: ["admin"] },
  { path: "/components/richTextEditor", component: RichTextEditor, roles: ["admin"] },
  { path: "/components/Markdown", component: Markdown, roles: ["admin"] },
  { path: "/charts/keyboard", component: KeyboardChart, roles: ["admin"] },
  { path: "/charts/line", component: LineChart, roles: ["admin"] },
  { path: "/charts/mix-chart", component: MixChart, roles: ["admin"] },
  { path: "/nested/menu1/menu1-1", component: Menu1_1, roles: ["admin"] },
  { path: "/nested/menu1/menu1-2/menu1-2-1", component: Menu1_2_1, roles: ["admin"] },
  { path: "/table", component: Table, roles: ["admin"] },
  { path: "/excel/export", component: ExportExcel, roles: ["admin"] },
  { path: "/excel/upload", component: UploadExcel, roles: ["admin"] },
  { path: "/zip", component: Zip, roles: ["admin"] },
  { path: "/clipboard", component: Clipboard, roles: ["admin"] },
  { path: "/error/404", component: Error404 },
];
