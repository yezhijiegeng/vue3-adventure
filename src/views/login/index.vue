<template>
  <div>
		test
    <login-component></login-component>
    <!-- <register-component></register-component> -->
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Prop, Watch } from "vue-property-decorator";
import LoginComponent from "./LoginComponent";
// import RegisterComponent from "./RegisterComponent";
@Options({
  components: {
    LoginComponent,
    // RegisterComponent,
  },
})
export default class Login extends Vue {

}
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
