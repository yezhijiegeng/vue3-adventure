<template>
  <el-dialog v-model="outerVisible" title="Outer Dialog" width="800" :before-close="onClose">
      <span>This is the outer Dialog</span>
    <!--   <el-dialog
        v-model="show"
        width="500"
        title="Inner Dialog"
        append-to-body
      >
        <span>This is the inner Dialog</span>
      </el-dialog> -->
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="onClose">Cancel</el-button>
        </div>
      </template>
    </el-dialog>
</template>

<script lang="ts" setup>
import { ref,  watch } from "vue";

defineProps({
  show:{
    type:Boolean,
    default:false
  }
})

const show = ref(false);
const outerVisible = ref(false);

watch(show,function (newVal) {
  console.log("newVal");
  outerVisible.value = newVal
  this.$emit('close')
})

const onClose = ()=>{
  outerVisible.value = false
}
/* import { Options, Vue,Prop,Watch } from "vue-property-decorator";

@Options({
  name: "DialogEdit",
  components: {},
})
export default class AiNav extends Vue {
  @Prop({default:{}}) show:boolean;
  @Watch('show')
  shawChange(val){
    this.outerVisible = val
  }

  onClose(){
    this.$emit('close')
    this.outerVisible = false
  }

  async mounted() {}
} */
</script>
<style lang="scss" scoped>
  @import "./index.scss";
</style>
