<template>
  <div class="models">
    <div>
      <el-input v-model="input" placeholder="输入模型名称" />
    </div>
    <div class="labels">
      <el-tag class="ml-2" type="info" v-for="(item, i) in tags" :key="i">{{
        item.name
      }}</el-tag>
    </div>
    <div class="picture sticky-header">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="最新" name="new"></el-tab-pane>
        <el-tab-pane label="热门" name="hot"></el-tab-pane>
        <el-tab-pane label="喜欢" name="like"></el-tab-pane>
      </el-tabs>
    </div>
    <el-row class="image-list" :gutter="20">
      <el-col
        v-for="(item, index) in imageList"
        :key="index"
        :span="4"
        class="card-box"
      >
        <el-card :body-style="{ padding: '0px' }" class="card">
          <div class="card__image-box">
            <!-- <img :src="item.url" class="image" /> -->
            <!-- style="width: 100px; height: 100px" -->
            <el-image
              style="height: 180px"
              :src="item.url"
              :fit="'scale-down'"
              :preview-src-list="[item.largeUrl]"
            ></el-image>
          </div>
          <div class="card__info">
            <span class="card__info--title">{{ item.title }}</span>
            <div class="card__info--desc">
              {{ item.desc }}
            </div>
          </div>
          <div class="card__bottom">
            <span class="card__bottom--avatar">
              <span>头像</span>
              <span>小语</span>
            </span>
            <span @click="like">
              <i :class="`iconfont icon-love card__bottom--icon ${item.isLike ? 'color-pink':''}`" @click="like(item)"></i>
              <span class="like-number card__bottom--number">55</span>
            </span>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { Options, Ref, Vue } from "vue-property-decorator";
export default class Models extends Vue {
  // tabPosition: "left";
  // handleSelect(index: string) {
  //   console.log(index);
  // }
  tags = [
    { name: "全部" },
    { name: "SDXL 模型" },
    { name: "SD 模型" },
    { name: "SD 风格" },
  ];
  activeName = "hot";

  fit = "fill";

  imageList = [
    {
      id: "101",
      url: "https://gd-hbimg.huaban.com/b54a3d5b013237a891e695a68832dcf3ef7914d62144ab-XtFq9q_fw1200webp",
      largeUrl: "",
      title: "校园女孩",
      desc: "二次元风格",
      avatar: "",
      authorUrl: "",
      loveCount: 0,
    },
    {
      id: "102",
      url: "https://gd-hbimg.huaban.com/b54a3d5b013237a891e695a68832dcf3ef7914d62144ab-XtFq9q_fw1200webp",
      largeUrl: "",
    },
    {
      id: "103",
      url: "https://gd-hbimg.huaban.com/aceb6e03e8385671ff035e0629c7c59eb5942aca36af6d-WTOlRQ_fw480webp",
      largeUrl: "",
    },
    {
      id: "104",
      url: "https://gd-hbimg.huaban.com/aceb6e03e8385671ff035e0629c7c59eb5942aca36af6d-WTOlRQ_fw480webp",
      largeUrl: "",
    },
    {
      id: "105",
      url: "https://gd-hbimg.huaban.com/aceb6e03e8385671ff035e0629c7c59eb5942aca36af6d-WTOlRQ_fw480webp",
      largeUrl: "",
    },
    {
      id: "106",
      url: "https://gd-hbimg.huaban.com/aceb6e03e8385671ff035e0629c7c59eb5942aca36af6d-WTOlRQ_fw480webp",
      largeUrl: "",
    },
    {
      id: "107",
      url: "https://gd-hbimg.huaban.com/2642c2d3a691a3b622e4122c9b3ca851f0c1212a1e1029-htsRGI_fw480webp",
      largeUrl:
        "https://gd-hbimg.huaban.com/2642c2d3a691a3b622e4122c9b3ca851f0c1212a1e1029-htsRGI_fw1200webp",
    },
    {
      id: "108",
      url: "https://gd-hbimg.huaban.com/a8127ca5485c830ebd6982c41110d525ed737331b8f29-mJ9ufy_fw480webp",
      largeUrl:
        "https://gd-hbimg.huaban.com/a8127ca5485c830ebd6982c41110d525ed737331b8f29-mJ9ufy_fw1200webp",
    },
    {
      id: "109",
      url: "https://gd-hbimg.huaban.com/49eac5a9ae4ffb0588e6bd4c3d91172d494c496c751c6-uFTAc4_fw1200webp",
      largeUrl:
        "https://gd-hbimg.huaban.com/49eac5a9ae4ffb0588e6bd4c3d91172d494c496c751c6-uFTAc4_fw1200",
    },
    {
      id: "110",
      url: "https://gd-hbimg.huaban.com/f315a646796f3f6b99d310d845b073494626fd3b55d68-UOnh0H_fw1200webp",
      largeUrl: [
        "https://gd-hbimg.huaban.com/f315a646796f3f6b99d310d845b073494626fd3b55d68-UOnh0H",
      ],
    },
    {
      id: "111",
      url: "https://gd-hbimg.huaban.com/02644abc2778ee509e795ca4d8e78d4201f0b7be1abf48-kQNbJ8_fw480webp",
      largeUrl:
        "https://gd-hbimg.huaban.com/02644abc2778ee509e795ca4d8e78d4201f0b7be1abf48-kQNbJ8_fw1200",
      title: "飞翔的女孩",
      desc: "宫崎骏风格",
      avatar: "",
      authorUrl: "",
      loveCount: 0,
      isLike: true,
    },
    {
      id: "107",
      url: "https://gd-hbimg.huaban.com/2642c2d3a691a3b622e4122c9b3ca851f0c1212a1e1029-htsRGI_fw480webp",
      largeUrl:
        "https://gd-hbimg.huaban.com/2642c2d3a691a3b622e4122c9b3ca851f0c1212a1e1029-htsRGI_fw1200webp",
    },
    {
      id: "108",
      url: "https://gd-hbimg.huaban.com/a8127ca5485c830ebd6982c41110d525ed737331b8f29-mJ9ufy_fw480webp",
      largeUrl:
        "https://gd-hbimg.huaban.com/a8127ca5485c830ebd6982c41110d525ed737331b8f29-mJ9ufy_fw1200webp",
    },
    {
      id: "109",
      url: "https://gd-hbimg.huaban.com/49eac5a9ae4ffb0588e6bd4c3d91172d494c496c751c6-uFTAc4_fw1200webp",
      largeUrl:
        "https://gd-hbimg.huaban.com/49eac5a9ae4ffb0588e6bd4c3d91172d494c496c751c6-uFTAc4_fw1200",
    },
    {
      id: "110",
      url: "https://gd-hbimg.huaban.com/f315a646796f3f6b99d310d845b073494626fd3b55d68-UOnh0H_fw1200webp",
      largeUrl: [
        "https://gd-hbimg.huaban.com/f315a646796f3f6b99d310d845b073494626fd3b55d68-UOnh0H",
      ],
    },
    {
      id: "111",
      url: "https://gd-hbimg.huaban.com/02644abc2778ee509e795ca4d8e78d4201f0b7be1abf48-kQNbJ8_fw480webp",
      largeUrl:
        "https://gd-hbimg.huaban.com/02644abc2778ee509e795ca4d8e78d4201f0b7be1abf48-kQNbJ8_fw1200",
      title: "飞翔的女孩",
      desc: "宫崎骏风格",
      avatar: "",
      authorUrl: "",
      loveCount: 0,
      isLike: true,
    },,
    {
      id: "107",
      url: "https://gd-hbimg.huaban.com/2642c2d3a691a3b622e4122c9b3ca851f0c1212a1e1029-htsRGI_fw480webp",
      largeUrl:
        "https://gd-hbimg.huaban.com/2642c2d3a691a3b622e4122c9b3ca851f0c1212a1e1029-htsRGI_fw1200webp",
    },
    {
      id: "108",
      url: "https://gd-hbimg.huaban.com/a8127ca5485c830ebd6982c41110d525ed737331b8f29-mJ9ufy_fw480webp",
      largeUrl:
        "https://gd-hbimg.huaban.com/a8127ca5485c830ebd6982c41110d525ed737331b8f29-mJ9ufy_fw1200webp",
    },
    {
      id: "109",
      url: "https://gd-hbimg.huaban.com/49eac5a9ae4ffb0588e6bd4c3d91172d494c496c751c6-uFTAc4_fw1200webp",
      largeUrl:
        "https://gd-hbimg.huaban.com/49eac5a9ae4ffb0588e6bd4c3d91172d494c496c751c6-uFTAc4_fw1200",
    },
    {
      id: "110",
      url: "https://gd-hbimg.huaban.com/f315a646796f3f6b99d310d845b073494626fd3b55d68-UOnh0H_fw1200webp",
      largeUrl: [
        "https://gd-hbimg.huaban.com/f315a646796f3f6b99d310d845b073494626fd3b55d68-UOnh0H",
      ],
    },
    {
      id: "111",
      url: "https://gd-hbimg.huaban.com/02644abc2778ee509e795ca4d8e78d4201f0b7be1abf48-kQNbJ8_fw480webp",
      largeUrl:
        "https://gd-hbimg.huaban.com/02644abc2778ee509e795ca4d8e78d4201f0b7be1abf48-kQNbJ8_fw1200",
      title: "飞翔的女孩",
      desc: "宫崎骏风格",
      avatar: "",
      authorUrl: "",
      loveCount: 0,
      isLike: true,
    },,
    {
      id: "107",
      url: "https://gd-hbimg.huaban.com/2642c2d3a691a3b622e4122c9b3ca851f0c1212a1e1029-htsRGI_fw480webp",
      largeUrl:
        "https://gd-hbimg.huaban.com/2642c2d3a691a3b622e4122c9b3ca851f0c1212a1e1029-htsRGI_fw1200webp",
    },
    {
      id: "108",
      url: "https://gd-hbimg.huaban.com/a8127ca5485c830ebd6982c41110d525ed737331b8f29-mJ9ufy_fw480webp",
      largeUrl:
        "https://gd-hbimg.huaban.com/a8127ca5485c830ebd6982c41110d525ed737331b8f29-mJ9ufy_fw1200webp",
    },
    {
      id: "109",
      url: "https://gd-hbimg.huaban.com/49eac5a9ae4ffb0588e6bd4c3d91172d494c496c751c6-uFTAc4_fw1200webp",
      largeUrl:
        "https://gd-hbimg.huaban.com/49eac5a9ae4ffb0588e6bd4c3d91172d494c496c751c6-uFTAc4_fw1200",
    },
    {
      id: "110",
      url: "https://gd-hbimg.huaban.com/f315a646796f3f6b99d310d845b073494626fd3b55d68-UOnh0H_fw1200webp",
      largeUrl: [
        "https://gd-hbimg.huaban.com/f315a646796f3f6b99d310d845b073494626fd3b55d68-UOnh0H",
      ],
    },
    {
      id: "111",
      url: "https://gd-hbimg.huaban.com/02644abc2778ee509e795ca4d8e78d4201f0b7be1abf48-kQNbJ8_fw480webp",
      largeUrl:
        "https://gd-hbimg.huaban.com/02644abc2778ee509e795ca4d8e78d4201f0b7be1abf48-kQNbJ8_fw1200",
      title: "飞翔的女孩",
      desc: "宫崎骏风格",
      avatar: "",
      authorUrl: "",
      loveCount: 0,
      isLike: true,
    },,
    {
      id: "107",
      url: "https://gd-hbimg.huaban.com/2642c2d3a691a3b622e4122c9b3ca851f0c1212a1e1029-htsRGI_fw480webp",
      largeUrl:
        "https://gd-hbimg.huaban.com/2642c2d3a691a3b622e4122c9b3ca851f0c1212a1e1029-htsRGI_fw1200webp",
    },
    {
      id: "108",
      url: "https://gd-hbimg.huaban.com/a8127ca5485c830ebd6982c41110d525ed737331b8f29-mJ9ufy_fw480webp",
      largeUrl:
        "https://gd-hbimg.huaban.com/a8127ca5485c830ebd6982c41110d525ed737331b8f29-mJ9ufy_fw1200webp",
    },
    {
      id: "109",
      url: "https://gd-hbimg.huaban.com/49eac5a9ae4ffb0588e6bd4c3d91172d494c496c751c6-uFTAc4_fw1200webp",
      largeUrl:
        "https://gd-hbimg.huaban.com/49eac5a9ae4ffb0588e6bd4c3d91172d494c496c751c6-uFTAc4_fw1200",
    },
    {
      id: "110",
      url: "https://gd-hbimg.huaban.com/f315a646796f3f6b99d310d845b073494626fd3b55d68-UOnh0H_fw1200webp",
      largeUrl: [
        "https://gd-hbimg.huaban.com/f315a646796f3f6b99d310d845b073494626fd3b55d68-UOnh0H",
      ],
    },
    {
      id: "111",
      url: "https://gd-hbimg.huaban.com/02644abc2778ee509e795ca4d8e78d4201f0b7be1abf48-kQNbJ8_fw480webp",
      largeUrl:
        "https://gd-hbimg.huaban.com/02644abc2778ee509e795ca4d8e78d4201f0b7be1abf48-kQNbJ8_fw1200",
      title: "飞翔的女孩",
      desc: "宫崎骏风格",
      avatar: "",
      authorUrl: "",
      loveCount: 0,
      isLike: true,
    },
  ];

  handleClick(tab, event) {
    const name = tab.props.name;
    console.log(name);
  }
  like(v) {
    this.imageList.find(item=>item.id === v.id).isLike = !v.isLike 
  }
}
</script>
<style lang="scss">
@import "./index.scss";
</style>
