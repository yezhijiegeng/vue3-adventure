<template>
    <div class="CardTemp">
        <div>icon
           <!--  <el-icon :size="'10px'" :color="'red'">
                <Edit />
            </el-icon>
            <Search style="width: 1em; height: 1em; margin-right: 8px" /> -->
        </div>
        <div>
            <div class="title">{{ info.title }}</div> 
            <div>{{ info.desc }}</div> 
        </div>
        <div>
            <ArrowRight style="width: 1em; height: 1em; margin-right: 8px" />
        </div>
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