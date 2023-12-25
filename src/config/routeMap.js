import React from 'react'

const Dashboard = React.lazy( () => import(/*webpackChunkName:'Dashboard'*/'@/views/dashboard'));
const Doc = React.lazy( () => import(/*webpackChunkName:'Doc'*/'@/views/doc'));
const Guide = React.lazy( () => import(/*webpackChunkName:'Guide'*/'@/views/guide'));
const Explanation = React.lazy( () => import(/*webpackChunkName:'Explanation'*/'@/views/permission'));
const AdminPage = React.lazy( () => import(/*webpackChunkName:'AdminPage'*/'@/views/permission/adminPage'));
const GuestPage = React.lazy( () => import(/*webpackChunkName:'GuestPage'*/'@/views/permission/guestPage'));
const EditorPage = React.lazy( () => import(/*webpackChunkName:'EditorPage'*/'@/views/permission/editorPage'));
const RichTextEditor = React.lazy( () => import(/*webpackChunkName:'RichTextEditor'*/'@/views/components-demo/richTextEditor'));
const Markdown = React.lazy( () => import(/*webpackChunkName:'Markdown'*/'@/views/components-demo/Markdown'));
const Draggable = React.lazy( () => import(/*webpackChunkName:'Draggable'*/'@/views/components-demo/draggable'));
const KeyboardChart = React.lazy( () => import(/*webpackChunkName:'KeyboardChart'*/'@/views/charts/keyboard'));
const LineChart = React.lazy( () => import(/*webpackChunkName:'LineChart'*/'@/views/charts/line'));
const MixChart = React.lazy( () => import(/*webpackChunkName:'MixChart'*/'@/views/charts/mixChart'));
const Menu1_1 = React.lazy( () => import(/*webpackChunkName:'Menu1_1'*/'@/views/nested/menu1/menu1-1'));
const Menu1_2_1 = React.lazy( () => import(/*webpackChunkName:'Menu1_2_1'*/'@/views/nested/menu1/menu1-2/menu1-2-1'));
const Table = React.lazy( () => import(/*webpackChunkName:'Table'*/'@/views/table'));
const ExportExcel = React.lazy( () => import(/*webpackChunkName:'ExportExcel'*/'@/views/excel/exportExcel'));
const UploadExcel = React.lazy( () => import(/*webpackChunkName:'UploadExcel'*/'@/views/excel/uploadExcel'));
const Zip = React.lazy( () => import(/*webpackChunkName:'Zip'*/'@/views/zip'));
const Clipboard = React.lazy( () => import(/*webpackChunkName:'Clipboard'*/'@/views/clipboard'));
const Error404 = React.lazy( () => import(/*webpackChunkName:'Error404'*/'@/views/error/404'));
const User = React.lazy( () => import(/*webpackChunkName:'User'*/'@/views/user'));
const About = React.lazy( () => import(/*webpackChunkName:'About'*/'@/views/about'));
const Bug = React.lazy( () => import(/*webpackChunkName:'Bug'*/'@/views/bug'));




export default [
  { path: "/dashboard", component:  <Dashboard />, roles: ["admin","editor","guest"] },
  { path: "/doc", component:  <Doc/>, roles: ["admin","editor","guest"] },
  { path: "/guide", component:  <Guide/>, roles: ["admin","editor"] },
  { path: "/permission/explanation", component:  <Explanation/>, roles: ["admin"] },
  { path: "/permission/adminPage", component:  <AdminPage/>, roles: ["admin"] },
  { path: "/permission/guestPage", component:  <GuestPage/>, roles: ["guest"] },
  { path: "/permission/editorPage", component:  <EditorPage/>, roles: ["editor"] },
  { path: "/components/richTextEditor", component:  <RichTextEditor/>, roles: ["admin","editor"] },
  { path: "/components/Markdown", component:  <Markdown/>, roles: ["admin","editor"] },
  { path: "/components/draggable", component:  <Draggable/>, roles: ["admin","editor"] },
  { path: "/charts/keyboard", component:  <KeyboardChart/>, roles: ["admin","editor"] },
  { path: "/charts/line", component:  <LineChart/>, roles: ["admin","editor"] },
  { path: "/charts/mix-chart", component:  <MixChart/>, roles: ["admin","editor"] },
  { path: "/nested/menu1/menu1-1", component:  <Menu1_1/>, roles: ["admin","editor"] },
  { path: "/nested/menu1/menu1-2/menu1-2-1", component:  <Menu1_2_1/>, roles: ["admin","editor"] },
  { path: "/table", component:  <Table/>, roles: ["admin","editor"] },
  { path: "/excel/export", component:  <ExportExcel/>, roles: ["admin","editor"] },
  { path: "/excel/upload", component:  <UploadExcel/>, roles: ["admin","editor"] },
  { path: "/zip", component:  <Zip/>, roles: ["admin","editor"] },
  { path: "/clipboard", component:  <Clipboard/>, roles: ["admin","editor"] },
  { path: "/user", component:  <User />, roles: ["admin"] },
  { path: "/about", component:  <About />, roles: ["admin", "editor", "guest"] },
  { path: "/bug", component:  <Bug />, roles: ["admin"] },
  { path: "/error/404", component:  <Error404 /> },
];
