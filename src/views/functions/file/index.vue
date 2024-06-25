<template>
	<div>
	  <video width="320" height="240" controls>
		<source :src="videoUrl" type="video/mp4">
		Your browser does not support the video tag.
	  </video>
	</div>
  </template>
   
  <script>
  import axios from 'axios';
   
  export default {
	data() {
	  return {
		videoUrl: null
	  };
	},
	created() {
	  this.loadVideo();
	},
	methods: {
	  loadVideo() {
		axios({
		  method: 'get',
		  url: '你的视频Blob流地址',
		  responseType: 'blob', // 重要
		}).then(response => {
		  let blob = new Blob([response.data], { type: 'video/mp4' });
		  this.videoUrl = URL.createObjectURL(blob);
		}).catch(error => {
		  console.error('Error fetching video blob:', error);
		});
	  }
	},
	beforeDestroy() {
	  if (this.videoUrl) {
		URL.revokeObjectURL(this.videoUrl); // 清理资源
	  }
	}
  };
  </script>