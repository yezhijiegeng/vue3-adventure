<template>
  <div class="ai-chat">
  
    <el-card>
      <div v-for="(item, index) in messages"
           :key="index">
        <span :style="{ color: item.user === 'user' ? '#409EFF' : '#67C23A' }">{{
				item.user === 'user' ? '我' : 'AI'
			}}：</span>
        <span>{{ item.content }}</span>
      </div>
    </el-card>
    <el-card class="opt-card">
      <el-input v-model="message"
                placeholder="请输入内容"
                clearable
                @keydown.enter.native="sendMessage"></el-input>
      <el-button type="primary"
                 @click="sendMessage" class="send-btn">发送</el-button>
    </el-card>
  </div>
</template>
<script lang="ts">
import { Options, Ref, Vue } from "vue-property-decorator";

@Options({
  name:'AiChat',
  components:{
  }
})
export default class AiChat extends Vue {
  // @Ref("inputElement") 
	inputElement!: HTMLInputElement;

  message = "";
  messages = [
    { user: "user", content: "你好" },
    { user: "ai", content: "你好，有什么我可以帮助你的？" },
  ];

  sendMessage() {
    if (this.message.trim() !== "") {
      this.messages.push({ user: "user", content: this.message });
      this.message = "";
      // 调用 AI 聊天 API 或模型
    }
  }
}
</script>
<style lang="scss" scoped >
.ai-chat {
/*   display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; */

  .send-btn {
    margin-top: 1rem;
  }
  .opt-card {
    position: fixed;
    bottom: 0;
  }
}

.el-card {
  width: 60%;
  margin-right: 20px;
}
</style>