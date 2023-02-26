<script setup>
    import {reactive} from 'vue'
    import { ref } from 'vue'
    // import {describe, expect} from 'vitest'

    const obj = reactive({
        nested: { count: 0 },
        arr: ['foo','bar']
    })
    const msg1 = ``

    function mutateDeeply(params) {
        obj.nested.count ++
        obj.arr.push('baz')
    }

    
    /* 响应式代理 vs. 原始对象 */
    const raw = {}
    const proxy = reactive(raw)
    console.log(proxy === raw); // false
    console.log(reactive(raw) === proxy); //  true 在同一个对象上调用 reactive() 会返回相同的代理
    console.log(reactive(proxy) === proxy); //  true  在一个代理上调用 reactive() 会返回它自己
    
   /*  describe('test',()=>{
        expect(1+1).toBe(1)
    }) */

    /* 嵌套对象依然是代理： */
    const proxy2 = reactive({})
    const raw2 = {}
    proxy2.nested = raw2;
    console.log(proxy2.nested===raw2);
    
    /* reactive() 的局限性*/
    
    // reactive() API 有两条限制：
    // 仅对对象类型有效（对象、数组和 Map、Set 这样的集合类型），而对 string、number 和 boolean 这样的 原始类型 无效。
    // 因为 Vue 的响应式系统是通过属性访问进行追踪的，因此我们必须始终保持对该响应式对象的相同引用。这意味着我们不可以随意地“替换”一个响应式对象，因为这将导致对初始引用的响应性连接丢失：

    let state = reactive({count:0})
    // state = reactive({count:1})

    // 同时这也意味着当我们将响应式对象的属性赋值或解构至本地变量时，或是将该属性传入一个函数时，我们会失去响应性：
    let n = state.count;
    n++; // 不影响原始的 state
    console.log(state.count); // 0
    let {count} = state
    count++
    console.log(state.count); // 0 不会影响原始的 state

    // 该函数接收一个普通数字，并且
    // 将无法跟踪 state.count 的变化
    // callSomeFunction(state.count)

    /* 用 ref() 定义响应式变量 */
    // reactive() 的种种限制归根结底是因为 JavaScript 没有可以作用于所有值类型的 “引用” 机制。为此，Vue 提供了一个 ref() 方法来允许我们创建可以使用任何值类型的响应式 ref： 
    
    const count2 = ref(0)
    console.log("count2",count2.value);

    // 和响应式对象的属性类似，ref 的 .value 属性也是响应式的。同时，当值为对象类型时，会用 reactive() 自动转换它的 .value。
    // 一个包含对象类型值的 ref 可以响应式地替换整个对象：
    const objectRef = ref({count:0})
    objectRef.value = {count:1}
    console.log("objectRef.value:",objectRef.value.count); // objectRef.value: 1

    // ref 被传递给函数或是从一般对象上被解构时，不会丢失响应性：
    const obj1 = {
        foo: ref(1),
        bar: ref(2)
    }

    const {foo,bar} = obj1
    console.log(obj1.foo.value,obj1.bar.value);

    /* ref 在模板中的解包 */
    // 当 ref 在模板中作为顶层属性被访问时，它们会被自动“解包”，所以不需要使用 .value。下面是之前的计数器例子，用 ref() 代替：
    const count3 = ref(0)
    function  increment() {
        count3.value++;
    }

    // 注意，仅当 ref 是模板渲染上下文的顶层属性时才适用自动“解包”。 例如， foo 是顶层属性，但 object.foo 不是。
    const obj4 = {foo4: ref(1)}
    // 下面的表达式将不会像预期的那样工作：
    // {{ object.foo + 1 }}
    // 渲染的结果会是一个 [object Object]1，因为 object.foo 是一个 ref 对象。我们可以通过将 foo 改成顶层属性来解决这个问题：
    const { foo4 } = obj4

    /* ref 在响应式对象中的解包 */
    // 当一个 ref 被嵌套在一个响应式对象中，作为属性被访问或更改时，它会自动解包，因此会表现得和一般的属性一样：
    const count5 = ref(0)
    const state5 = reactive({
        count
    })
    console.log(state5.count);
    state5.count = 5;
    console.log(state5.count);

    // 如果将一个新的 ref 赋值给一个关联了已有 ref 的属性，那么它会替换掉旧的 ref：
    const otherCount = ref(2)
    state5.count = otherCount;  // state5.count:5
    console.log(state5.count);
    console.log(count5.value);
    
    /* 数组和集合类型的 ref 解包 */
    // 跟响应式对象不同，当 ref 作为响应式数组或像 Map 这种原生集合类型的元素被访问时，不会进行解包。
    const books = reactive([ref('Vue3 guide')])
    console.log(books[0].value)

    const map = reactive(new Map([['count',ref(0)],['count1',ref(1)]]))
    console.log(map.get('count').value); // 0
    console.log(map.get('count1').value); // 1

    /* 响应性语法糖 */
    // let count6 = $ref(0)
    /* function  increment6() {
        count6++;
    } */

    

</script>
<template>
    <div>
        <div>
            <h4 class="title">深层响应性</h4>
            <button @click="mutateDeeply">{{obj.nested.count}}</button>
            <span>{{obj.arr}}</span>
        </div>
        <hr/>
        <div>
            <h4>测试样式</h4>
            <p>响应式代理 vs. <strong>原始对象</strong></p>
            <div>
                <i>只有代理对象是响应式的</i>，<u>更改原始对象不会触发更新</u>。<ins>因此</ins>，使用 Vue 的响应式系统的最佳实践是 <strong>仅使用你声明对象的代理版本</strong>
            为保证访问代理的一致性，对同一个原始对象调用 reactive() 会总是返回同样的代理对象，而对一个已存在的代理对象调用 reactive() 会返回其本身：
            </div>
        </div>
        <hr/>
        <div>
            <h4>响应式代理 vs. <strong>原始对象</strong></h4>
        </div>
        <hr/>
        <h4>用 ref() 定义响应式变量 </h4>
        Mouse position is at: {{ x }}, {{ y }}
        <hr/>
        <h4 class="title">ref 在模板中的解包 </h4>
            <button @click="increment">{{count3}}</button>
            {{foo4 + 1}}
        <hr/>
        <h4 class="title">数组和集合类型的 ref 解包 </h4>
        <hr/>
        <h4 class="title">响应性语法糖 </h4>
        <button @click="increment6">{{count}}</button>
        {{foo6}}
        <hr/>
    </div>
  
</template>


