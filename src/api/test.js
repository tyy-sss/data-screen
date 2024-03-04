// 权限管理
import http from "./request";

let testFun = {
  user: {},
};

// 示例
testFun.user.getAllRole = () => {
  return http.get("/role/allRole");
};

export default testFun;
