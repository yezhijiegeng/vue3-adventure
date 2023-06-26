// declare let jQuery: (selector: string) => any;
declare function jQuery(selector: string): any;
declare function jQuery(domReadyCallback: () => any): any;

/* declare class */

declare class Animal {
  name: string;
  constructor(name: string);
  sayHi(): string;
}

/* declare namespace */
declare namespace jQuery {
  //   function ajax(url: string, settings?: any): void;

  const version: number;
  class Event {
    blur(eventType: EventType): void;
  }
  enum EventType {
    CustomClick,
  }

  /* 嵌套的命名空间 */
  namespace fn {
    function extend(object: any): void;
  }

  /* iterface 和type */
  interface AjaxSettings {
    methos: "GET" | "POST";
    data?: any;
  }
  function ajax(url: string, settings?: AjaxSettings): void;

  /* 防止命名冲突 ：
    减少全局变量、类型的数量；
    把它们放在namespace下
    加上jQUery 前缀*/
}
