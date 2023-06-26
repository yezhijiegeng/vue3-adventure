import { U } from "vitest/dist/types-94cfe4b4";

interface Url {
  name: string;
  params?: Object;
  query?: Object;
}

// 全局访问组件
export interface Links {
  text: string;
  url: Url;
}
