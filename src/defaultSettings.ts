export default {
  /**
   * @type {boolean} true | false
   * @description Whether show the settings right-panel
   */
  showSettings: true,
  // 如果只想在开发环境下显示系统设置面板，生产环境下不显示，那么请打开下面这行代码
  // showSettings: process.env.NODE_ENV === "development",

  /**
   * @type {boolean} true | false
   * @description Whether show the logo in sidebar
   */
  sidebarLogo: true,

  /**
   * @type {boolean} true | false
   * @description Whether fix the header
   */
  fixedHeader: false,
  
  /**
   * @type {boolean} true | false
   * @description Whether need tagsView
   */
  tagsView: true,
};
