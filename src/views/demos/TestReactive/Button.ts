export function sum(a, b) {
  return a + b;
}

/* 测试异步 */

export const getDataCallback = (fn) => {
  setTimeout(() => {
    fn({ name: "callback" });
  }, 1000);
};

export const getDataPromise = (fn) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "callback" });
    }, 1000);
  });
};
