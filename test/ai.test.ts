/* import { render } from "@testing-library/vue";
import Ai from "./src/views/home/pages/ai/index.vue";
import { shallowMount } from "@vue/test-utils";
*/
import { sum } from "./sum";
import { test, describe, expect, it } from "vitest";
import { shallowMount } from "@vue/test-utils";
// import Ai from "@/views/home/pages/ai/index.vue";
// import Ai from "../src/views/home/pages/ai/index.vue";
// import Ai from "@/views/home/pages/foreign.vue";

describe("test", () => {
  test("test1", () => {
    expect(sum(1, 3)).toBe(4);
  });
});

// import AddNum from "@/views/AddNum.vue";

/* describe("组件单元测试", () => {
  it("test1", async () => {
    const wrapper = shallowMount(Ai);
    const btn = ".test-utils-button";
    const value = ".test-utils-value";
    expect(wrapper.find(value).text()).toContain("值为：1");
    await wrapper.find(btn).trigger("click");
    expect(wrapper.find(value).text()).toBe("值为：2");
  });
}); */
/* test("it should work", () => {
  const { addNew } = render(Ai, {
    props: {},
  });
  addNew("---");
}); */

/* test("it should work", () => {
  const { getByText } = render(Ai, {
    props: {},
  });

  // 断言输出
  getByText("...");
  const ai = (Ai, {});
}); */
/* describe("Button", () => {
  // mount
  test("mount  @vue/test-utils", () => {
    // @vue/test-utils
    const wrapper = shallowMount(Ai, {
      slots: {
        default: "Button",
      },
    });

    // 断言
    expect(wrapper.text()).toBe("Button");
  });
}); */
/* 
test("it should work", () => {
  const { getByText } = render(Ai, {
    props: {
      msg: "hello",
    },
  });

  // assert output
  getByText("hello");
});
 */

// import sum from "./sum";
// import { describe, expect, it } from "vitest";
/* describe("#Ai", () => {
  it("returns 0 with no numbers", () => {
    expect(addNew("11")).toBe("11");
  });
}); */

//使用shallowMount()方法挂载组件，并使用expect断言方法来检验组件的渲染是否正确
/* describe("Ai", () => {
  test("mount @vue/test-utils", () => {
    const wrapper = shallowMount(Ai, {
      slots: {
        default: "Ai",
      },
    });
    //断言
    expect(wrapper.text()).toBe("Ai");
  });
});
//对组件颜色进行测试，测试默认link颜色
describe("Ai", () => {
  test("default color is black", () => {
    // 使用 shallowMount 方法挂载组件
    const wrapper = shallowMount(Ai);
    // 断言组件默认颜色是否是 black
    expect(wrapper.props().color).toBe("Ai");
  });
});
 */
