import React from "react";
import ReactDOM from 'react-dom/client'
import App from "./App";
// import "antd/dist/antd.less";
import 'antd/dist/reset.css';
import "@/styles/index.less";
import "./mock";
import '@/lib/monitor';
// import ErrorBoundary from "antd/es/alert/ErrorBoundary";


ReactDOM.createRoot(document.getElementById('root')).render(<App />)
