<script setup lang="ts">
// import { tr } from "element-plus/es/locale";
import { ref } from "vue";
const isContentShown = ref(false);
const open = () => (isContentShown.value = true);

defineExpose({
  open,
});
</script>
