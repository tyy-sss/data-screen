import axios from "axios";

//1.利用axios对象的方法create，去创建一个axios实例。
const YSB = "http://192.168.50.35:8081/";
const requests = axios.create({
  //配置对象
  //接口当中：路径都带有/api     基础路径，发送请求的时候，路径当中会出现api
  baseURL: YSB,
  //代表请求超时的时间
  timeout: 30 * 1000,
});
//请求拦截器：
requests.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
});
//接收请求拦截器
requests.interceptors.response.use((res) => {
  if (typeof res.data !== "object") {
    ElMessage.error("服务端异常！");
    return Promise.reject(res);
  }
  if (res.data.code != 200) {
    return Promise.reject(res.data);
  }
  return res.data; //返回的是数据
});

const header = {
  "Content-Type": "application/json;charset=UTF-8",
};
const header2 = {
  "Content-Type": "multipart/form-data;charset=UTF-8",
};
const http = {
  upload(url = "", formData) {
    return new Promise((resolve, reject) => {
      requests({
        url,
        data: formData,
        headers: header2,
        method: "POST",
      })
        .then((res) => {
          resolve(res.data);
          return res;
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  get(url = "", params = {}) {
    return new Promise((resolve, reject) => {
      requests({
        url,
        params,
        headers: header,
        method: "GET",
      })
        .then((res) => {
          resolve(res.data);
          return res;
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  post(url = "", params = {}) {
    return new Promise((resolve, reject) => {
      requests({
        url,
        data: params,
        headers: header,
        method: "POST",
      })
        .then((res) => {
          resolve(res.data);
          return res.data;
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  put(url = "", params = {}) {
    return new Promise((resolve, reject) => {
      requests({
        url,
        data: params,
        headers: header,
        method: "PUT",
      })
        .then((res) => {
          resolve(res.data);
          return res.data;
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  delete(url = "", params = {}) {
    return new Promise((resolve, reject) => {
      requests({
        url,
        data: params,
        headers: header,
        method: "DELETE",
      })
        .then((res) => {
          resolve(res.data);
          return res.data;
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};

//对外暴露
export default http;
