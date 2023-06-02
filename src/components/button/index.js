import { defineComponent } from "vue";

const TzButton = defineComponent({
  name: "TzButton",
  setup(props, { slots }) {
    return () => {
      <button class="button">{slots.default && slots.default()}</button>;
    };
  },
});

export default TzButton;
