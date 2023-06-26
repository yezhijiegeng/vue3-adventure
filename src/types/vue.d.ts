// import moment from 'moment';
import axios from "axios";

declare module "vue" {
  interface ComponentCustomProperties {
    $filters: {
      isPeriodEmpty: (value: string) => any;
    };
    $http: typeof axios;
    $translate: (key: string) => string;
  }

  interface Vue {
    // $moment: typeof moment;
  }

  /*  interface ComponentCustomOptions {
    // 扩展自定义选项
    beforeEnter?: (to: Route, from: Route, next: () => void) => void;
  } */
}

export {};
