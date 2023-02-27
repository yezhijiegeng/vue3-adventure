<script setup>
    import { ref,reactive } from 'vue'

    const items = ref([{message:'foo'},{message:'bar'}])
    const myObject = reactive({
        title:'test',
        author:'taozi',
        desc:'detail'
    })
    const todoList = ref([{name:'clean',isConplete:true},
                          {name:'wash',isConplete:false},
                          {name:'write',isConplete:false}])
</script>
<template>
    <div>
        <h2 class="title"> v-for</h2>
        <div v-for="item in items">{{ item.message }}</div>
        <hr/>
        <h2 class="title"> 解构</h2>
        <div v-for="{message} in items">{{ message }}</div>
        <div v-for="({message},index) in items">{{ message }}-{{ index }}</div>
        <div>你也可以使用 of 作为分隔符来替代 in，这更接近 JavaScript 的迭代器语法</div>
        <pre>
            <div v-for="item of items"></div>
        </pre>
        <div v-for="item of items">{{ item.message }}</div>
        <h2 class="title"> v-for 与对象</h2>
        <div>
            你也可以使用 v-for 来遍历一个对象的所有属性。遍历的顺序会基于对该对象调用 Object.keys() 的返回值来决定。
            <ul>
                <li v-for="item in myObject">{{ item }}</li>
            </ul>
            可以通过提供第二个参数表示属性名 (例如 key)：
            <ul>
                <li v-for="(value,key) in myObject">{{ key }} : {{ value }}</li>
            </ul>
            第三个参数表示位置索引：
            <ul>
                <li v-for="(value,key,index) in myObject">{{index}}-{{ key }} : {{ value }}</li>
            </ul>
        </div>
        <hr/>
        <h2 class="title"> 在 v-for 里使用范围值</h2>
        <span v-for="n in 10">{{ n }}</span>
        <hr/>
        <h2 class="title"> template 上的 v-for</h2>
        <div>与模板上的 v-if 类似，你也可以在 template 标签上使用 v-for 来渲染一个包含多个元素的块。例如：</div>
        <ul>
            <template  v-for="item in items">
                <li>{{ item.message }}</li>
                <li class="dilider">dilider</li>
            </template>
        </ul>
        <hr/>
        <h2 class="title"> v-for 与 v-if</h2>
        <div>当它们同时存在于一个节点上时，v-if 比 v-for 的优先级更高。这意味着 v-if 的条件将无法访问到 v-for 作用域内定义的变量别名：</div>
        <div>在外新包装一层 template 再在其上使用 v-for 可以解决这个问题 (这也更加明显易读)：</div>
        <template v-for="todo in todoList">
            <div  v-if="!todo.isConplete">
            {{ todo.name }}
            </div>
        </template>
        
        <hr/>
    </div>
  
</template>
<style>
   
</style>


