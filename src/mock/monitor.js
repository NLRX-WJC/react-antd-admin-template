export default {
  monitor: (config) => {
    console.log('config',config);
    return {
      status: 1,
      message: "monitor",
    };
  }
}