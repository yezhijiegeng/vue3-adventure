<script setup>
    import { ref } from 'vue'

    const awesome = ref(true)
    const ok = ref(true)
    const isShow = ref(false)
    
</script>
<template>
    <div>
        <h2 class="title"> 条件渲染</h2>
        <div v-if="awesome">vue is awesome!</div>
        <hr/>
        <h2 class="title"> template 上的 v-if</h2>
        <template v-if="ok">
            <div>title</div>
        </template>
        <hr/>
        <h2 class="title"> template 上的 v-if</h2>
        <div>v-show <u>不支持在 template 元素上使用</u> ，也不能和 v-else 搭配使用。</div>
        <div>不同之处在于 v-show 会 <u>在 DOM 渲染中保留该元素；</u> v-show 仅切换了该元素上名为 display 的 CSS 属性。</div>
        <div v-show="isShow"> isShow</div>
        <hr/>
        <h2 class="title"> v-if vs. v-show</h2>
        <div>
            v-if 是“真实的”按条件渲染，因为它确保了在切换时，条件区块内的事件监听器和子组件都会被销毁与重建。<br>

            v-if 也是惰性的：如果在初次渲染时条件值为 false，则不会做任何事。条件区块只有当条件首次变为 true 时才被渲染。<br>

            相比之下，v-show 简单许多，元素无论初始条件如何，始终会被渲染，只有 CSS display 属性会被切换。<br>

            总的来说，v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，<u> 如果需要频繁切换，则使用 v-show 较好</u>；如果在运行时绑定条件很少改变，则 v-if 会更合适。
        </div>
        <hr/>
        <h2 class="title"> v-if 和 v-for</h2>
        <div>
            同时使用 v-if 和 v-for 是不推荐的，因为这样二者的优先级不明显。请查看风格指南获得更多信息。
            当 v-if 和 v-for 同时存在于一个元素上的时候，<u>v-if 会首先被执行</u>。请查看列表渲染指南获取更多细节。
        </div>
        
    </div>
  
</template>
<style>
   
</style>


