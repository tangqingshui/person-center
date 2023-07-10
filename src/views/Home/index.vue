<template>
 <!--  轮播图其实就是利用了根节点溢出隐藏，然后通过根节点的宽高和当前索引算出容器要移动的距离通过改变定位或外边距或平移就可以实现了 -->
  <div class="home-container" ref="container" @wheel="onWheel" v-loading="loading">
    <input :key="key" />
    <ul
      class="carousel-container"
      :style="{
        transform: `translateY(${translateY})`,
      }"
      @transitionend="switching=false"
    >
      <li v-for="(item, i) in banners" :key="item.id">
        <CarouselItem :carousel="item" :isActive="index === i && !switching"/>
      </li>
    </ul>
    <div v-show="index >= 1" @click="switchTo(index - 1)" class="icon icon-up">
      <Icon type="arrowUp" />
    </div>
    <div
      v-show="index < banners.length - 1"
      @click="switchTo(index + 1)"
      class="icon icon-down"
    >
      <Icon type="arrowDown" />
    </div>
    <ul class="indicator">
      <li
        :class="{
          active: i === index,
        }"
        v-for="(item, i) in banners"
        :key="item.id"
        @click="switchTo(i)"
      />
    </ul>
  </div>
</template>

<script>
import CarouselItem from "./CarouselItem";
import Icon from "@/components/Icon";
import { debounce } from '@/utils'
import { mapState } from "vuex";

export default {
  components: {
    CarouselItem,
    Icon,
  },
  data() {
    this.debounceGetClientHeight = debounce(this.getClientHeight, 1000);
    return {
      index: 1, // 当前显示的是第几张轮播图
      containerHeight: 0, // 整个容器的高度
      switching: false, // 是否正在滚动中
      key: 1,
    };
  },
  created() {
    this.$store.dispatch("banner/fetchBanner");
  },
  computed: {
    translateY() {
      return -this.index * this.containerHeight + "px";
    },
    ...mapState("banner", ["loading", "banners"]),
  },
  methods: {
    // 切换轮播图
    switchTo(i) {
      this.switching = true;
      this.index = i;
    },
    getClientHeight() {
      this.containerHeight = this.$refs.container.clientHeight;
    },
    onWheel(e) {
      if (this.switching) {
        return;
      }
      if (e.deltaY < -5 && this.index > 0) {
        // 往上滚动
        this.switching = true;
        this.index--;
      } else if (e.deltaY > 5 && this.index < this.banners.length - 1) {
        // 往下滚动
        this.switching = true;
        this.index++;
      }
    },
  },
  mounted() {
    this.containerHeight = this.$refs.container.clientHeight;
    // 事件监听要移除
    window.addEventListener("resize",this.debounceGetClientHeight);
  },
  destroyed() {
    window.removeEventListener("resize",this.debounceGetClientHeight);
  }
};
</script>

<style lang="scss" scoped>
@import "~@/styles/var.scss";
.home-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  ul {
    margin: 0;
  }
}
.carousel-container {
  width: 100%;
  height: 100%;
  transition: 500ms;

  li {
    width: 100%;
    height: 100%;
  }
}
.icon {
  $gap: 25px;
  color: $gray;
  cursor: pointer;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  &.icon-up {
    top: $gap;
    animation: jump-up 2s infinite;
  }
  &.icon-down {
    top: auto;
    bottom: $gap;
    animation: jump-down 2s infinite;
  }
  $jump: 5px;
  @keyframes jump-up {
    0% {
      transform: translate(-50%, $jump);
    }
    50% {
      transform: translate(-50%, -$jump);
    }
    100% {
      transform: translate(-50%, $jump);
    }
  }
  @keyframes jump-down {
    0% {
      transform: translate(-50%, -$jump);
    }
    50% {
      transform: translate(-50%, $jump);
    }
    100% {
      transform: translate(-50%, -$jump);
    }
  }
}
.indicator {
  position: absolute;
  right: 25px;
  top: 50%;
  transform: translateY(-50%);
  li {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: $words;
    margin-bottom: 10px;
    border: 1px solid #fff;
    box-sizing: border-box;
    cursor: pointer;
    &.active {
      background: #fff;
    }
  }
}

.icon-container {
  font-size: 30px;
}
</style>
