<template>
  <div class="tab">Home component1</div>
  <button @click="greet">greet</button>
</template>
<script lang="ts">
import { defineComponent, ref, inject } from "vue";
import { useI18n } from "vue-i18n";

export default {
  name: "home",
  /*  setup() {
    const { t } = inject("i18n");
    console.log(t("common.greet"));
    const message.value = t("common.greet");
    return {
      message
    }
  }, */
  setup() {
    const { t } = useI18n();
    console.log(t("common.greet"));
  },
  methods: {
    greet() {
      /* import { i18n } from "@/locales";
        const { t } = i18n.global;

      // const { t } = useI18n();
      console.log("111");
      console.log(t("language.name")); */
      // const { t } = inject("i18n");
    },
  },
};
</script>
