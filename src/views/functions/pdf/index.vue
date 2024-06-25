<template>
	<div>
	  <div>
		pdf pdf
	  </div>
  
	  <router-view></router-view>
	</div>
  </template>
  
  <script lang="ts">
  import { Options, Ref, Vue } from "vue-property-decorator";
  import { useRouter } from "vue-router";
  import GesturePassword from "@alitajs/gesture-password-vue";
  
  @Options({
	name: "Functions",
	components: {
	  GesturePassword,
	},
  })
  export default class Functions extends Vue {
	width = 375;
	height = 300;
	onChange(data) {
	  console.log(data); // get gesture password
	}
  }
  </script>
  