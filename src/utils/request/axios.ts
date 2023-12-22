// http.ts
import axios from 'axios';

const instance = axios.create({
  baseURL: '', // /api
  timeout: 5000,
});

instance.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么，例如添加 token 到 headers
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    // 对响应数据做点什么，例如统一处理错误码
    return response;
  },
  (error) => {
    // 对响应错误做点什么，例如处理 401 未授权错误
    return Promise.reject(error);
  }
);

export default instance;