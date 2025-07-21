<template>
	<div>mock</div>
</template>
<script lang="ts" setup>
import Mock from 'mockjs'
// 使用 Mock
var data = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|1-10': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1
    }]
})
// 输出结果
console.log(JSON.stringify(data, null, 4))

const data2 = Mock.mock('@cword("零一二三四五六七八九十", 3)')
console.log(data2)

</script>