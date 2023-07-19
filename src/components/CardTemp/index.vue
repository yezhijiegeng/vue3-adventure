<template>
    <div class="CardTemp">
        <div class="title">{{ info.title }}</div> 
        <div>{{ info.desc }}</div> 
    </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { Prop } from 'vue-property-decorator'

@Options({
  name:'CardTemp',
  components:{}
})

export default class CardTemp extends Vue {
    @Prop({default:{}}) info :Object;

}
</script>
<style lang="scss" scoped>
    @import './index.scss'
</style>