<template>
  <div class="carousel-item-container"
    ref="container"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave">
    <div class="carousel-img"  ref="image" :style="imagePosition">
      <ImageLoader
        @load="onLoad"
        :src="carousel.bigImg"
        :placeholder="carousel.midImg"
      />
    </div>
    <div class="title" ref="title">{{ carousel.title }}</div>
    <div class="desc" ref="desc">{{ carousel.description }}</div>
  </div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader";
import {TextAnimation} from "@/utils";

export default {
  props: ["carousel",'isActive'],
  components: {
    ImageLoader,
  },
  data() {
    return {
      isLoadDone: false,
      containerSize: null, // 外层容器的尺寸
      innerSize: null, // 里层图片的尺寸
      mouseX: 0, // 鼠标的横坐标
      mouseY: 0, // 鼠标的纵坐标
      titleAnimation:  new TextAnimation(),
      descAnimation:  new TextAnimation()
    };
  },
  computed: {
    //得到图片坐标
    imagePosition() {
      if (!this.innerSize || !this.containerSize) {
        return;
      }
      const extraWidth = this.innerSize.width - this.containerSize.width; // 多出的宽度
      const extraHeight = this.innerSize.height - this.containerSize.height; //多出的高度
      const left = (-extraWidth / this.containerSize.width) * this.mouseX;
      const top = (-extraHeight / this.containerSize.height) * this.mouseY;
      return {
        transform: `translate(${left}px, ${top}px)`,
      };
    },
    center() {
      return {
        x: this.containerSize.width / 2,
        y: this.containerSize.height / 2,
      };
    },
  },
  methods: {
  // 调用该方法，显示文字
  showWords() {
    this.titleAnimation.show();
    this.descAnimation.show(2, 1);
  },
  hiddenWords() {
    this.titleAnimation.hidden();
    this.descAnimation.hidden();
  },
  onLoad() {
    this.isLoadDone = true;
    if(this.isActive) {
      this.showWords();
    }
  },
  setSize() {
    this.containerSize = {
      width: this.$refs.container.clientWidth,
      height: this.$refs.container.clientHeight,
    };

    this.innerSize = {
      width: this.$refs.image.clientWidth,
      height: this.$refs.image.clientHeight,
    };
  },
  handleMouseMove(e) {
    const rect = this.$refs.container.getBoundingClientRect();
    this.mouseX = e.clientX - rect.left;
    this.mouseY = e.clientY - rect.top;
  },
  handleMouseLeave() {
    this.mouseX = this.center.x;
    this.mouseY = this.center.y;
  },
  },
  watch:{
    isActive(val) {
      if(val && this.isLoadDone) {
        this.showWords();
      }else {
        this.hiddenWords();
      }
    }
  },
  mounted() {
    this.titleAnimation.init(this.$refs.title);
    this.descAnimation.init(this.$refs.desc);
    this.setSize();
    this.mouseX = this.center.x;
    this.mouseY = this.center.y;
    window.addEventListener("resize", this.setSize);
  },
  destroyed() {
    window.removeEventListener("resize", this.setSize);
  },
};
</script>

<style lang="scss" scoped>
@import "~@/styles/var.scss";
.carousel-item-container {
  width: 100%;
  height: 100%;
  color: #fff;
  position: relative;
  overflow: hidden;
}
.carousel-img {
  width: 120%;
  height: 120%;
  transition: 0.3s;
}
.title,
.desc {
  position: absolute;
  letter-spacing: 3px;
  left: 30px;
  color: #fff;
  text-shadow: 1px 0 0 rgba(0, 0, 0, 0.5), -1px 0 0 rgba(0, 0, 0, 0.5),
    0 1px 0 rgba(0, 0, 0, 0.5), 0 -1px 0 rgba(0, 0, 0, 0.5);
  white-space: nowrap;
  overflow: hidden;
  opacity: 0;
}
.title {
  top: calc(50% - 40px);
  font-size: 2em;
}
.desc {
  top: calc(50% + 20px);
  font-size: 1.2em;
  color: lighten($gray, 20%);
}
</style>
