import Mock from "mockjs";
import loginAPI from "./login";
import userAPI from "./user";
import remoteSearchAPI from "./remoteSearch";
import excelAPI from "./excel";
import tableAPI from "./table";

// 登录相关
Mock.mock(/\/login/, "post", loginAPI.login);
Mock.mock(/\/logout/, "post", loginAPI.logout);
Mock.mock(/\/userInfo/, "post", userAPI.userInfo);

// dashboard
Mock.mock(/\/transaction\/list/, "get", remoteSearchAPI.transactionList);

// excel
Mock.mock(/\/excel\/list/, "get", excelAPI.excelList);
// table
Mock.mock(/\/table\/list/, "post", tableAPI.tableList);
Mock.mock(/\/table\/delete/, "post", tableAPI.deleteItem);
Mock.mock(/\/table\/edit/, "post", tableAPI.editItem);
export default Mock;
