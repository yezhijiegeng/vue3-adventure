<template>
	<div id="app">
	  <div class="container">
		<h1>网址导航</h1>
		<NavigationList />
	  </div>
	</div>
  </template>
  
  <script>
  import NavigationList from "@/components/NavigationList.vue";
  
  export default {
	components: {
	  NavigationList,
	},
  };
  </script>
  
  <style>
  #app {
	height: 100%;
  }
  
  .container {
	height: 100%;
	display: flex;
	flex-direction: column;
  }
  
  h1 {
	text-align: center;
  }
  </style>