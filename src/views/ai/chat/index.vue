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
      <el-input v-model="inputMessage"
                placeholder="请输入内容"
                clearable
                @keydown.enter.native="sendMessage"></el-input>
      <el-button type="primary"
                 @click="sendMessage"
                 class="send-btn">发送</el-button>
    </el-card>
  </div>
</template>
<script lang="ts">
import { Options, Ref, Vue } from "vue-property-decorator";
import axios from "axios";
import { tr } from "element-plus/es/locale";
import { log } from "console";

@Options({
  name: "AiChat",
  components: {},
})
export default class AiChat extends Vue {
  // @Ref("inputElement")
  inputElement!: HTMLInputElement;
  messages = [
    { user: "user", content: "你好" },
    { user: "ai", content: "你好，有什么我可以帮助你的？" },
  ];
  inputMessage:string = "";

  async sendMessage() {
    if (this.inputMessage .trim() !== "") {
      this.messages.push({ user: "user", content: this.inputMessage });

      try{
        
      // 调用 AI 接口，获取回复
      const response = await axios.post(
        "https://api.qianwenguan.com/chat",
        {
          question: this.inputMessage,
        }
      );

      const answer = response.data.answer;
      this.messages.push({ author: "AI", text: answer });
      
      this.inputMessage = "";

      } catch(e){
        this.inputMessage = "";
        console.log(e)
      }
      
      
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