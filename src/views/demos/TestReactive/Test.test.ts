/* import Button from './Button'

import { shallowMount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
// 测试分组
describe('Button', () => {
  // mount
  test('mount  @vue/test-utils', () => {
    // @vue/test-utils
    const wrapper = shallowMount(Button, {
      slots: {
        default: 'Button',
      },
    })

    // 断言
    expect(wrapper.text()).toBe('Button')
  })
})
 */

 // 测试用例的写法
/* import { expect, test, describe, it} from 'vitest'
import { sum } from './Button'
 
 
test('测试sum函数', () => {
  expect(sum(1, 2)).toBe(3)
})


// describe表示分组，分组里面一个个的用例
describe('测试基本方法', () => {
  it('测试sum函数', () => {
    expect(sum(1, 2)).toBe(3)
  })
  it('测试1+1=2', () => {
    expect(1 + 1).toBe(2)
  })
  it ('对象比较', () => {
    expect({name: 1}).toEqual({name: 1})
  })
})
 
 
it('测试不相等', () => {
  expect(1+1).not.toBe(3) // 1+1不等3
  expect(3).toBeLessThan(5) // 3<5
})
 
 
it('测试包含', () => {
  expect('hello').toContain('h')
  expect('hello').toMatch(/h/)
}) */

import {expect, test } from 'vitest'
import { getDataCallback, getDataPromise,sum } from './Button'

test('测试sum函数',()=>{
  expect(sum(1,2)).toBe(3);
})

/* describe 分组 */
describe('测试基本方法',()=>{
  it('测试sum函数',()=>{
    expect(sum(1,2)).toBe(3);
  })
  it('测试1+1=2',()=>{
      expect(1+1).toBe(2);
  })
  it('对象比较',()=>{
    expect({name:1}).toEqual({name:1})
  })
})

it('测试不相等',()=>{
  expect(1+1).not.toBe(3);
  expect(3).toBeLessThan(6);
})

it('测试包含',()=>{
  expect("hello").toContain('h')
  expect('hello').toMatch(/h/)
})

/* 测试异步 */
it('测试回调函数',(done)=>{
  getDataCallback((data)=>{
    expect(data).toEqual({name:'callback'})
  })
})

it('测试promise', async ()=>{
  const data = await getDataPromise();
  expect(data).toEqual({name:'callback'})
})


