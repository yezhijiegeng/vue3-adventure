// 引入封装后的axios
import request from "@/utils/request";
import { post } from "@/utils/request.js";

/* 用户登录api */
export function login(params) {
  return post("/users/login", params);
}