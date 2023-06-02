<template>
  <div class="tab">
    <CustomInput
      v-model:title="title"
      v-model:firstName="first"
      v-model:lastName="last"
    />
    {{ title }}
    {{ first }},{{ last }}
    <InfoItem :title="'foreignItem'" :likes="5"></InfoItem>
  </div>
</template>
<script>
import { onMounted } from "vue";
import InfoItem from "../../../components/infoItem/index.vue";
import CustomInput from "@/components/CustomInput/index.vue";
export default {
  name: "foreign",
  components: {
    CustomInput,
    InfoItem,
  },
  data() {
    return {
      title: "v-model argument example",
      first: "tao",
      last: "zi",
    };
  },
  setup() {
    onMounted(() => {
      console.log("foreign");
    });
  },
};
</script>
