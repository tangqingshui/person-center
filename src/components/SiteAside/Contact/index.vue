<template>
  <ul class="contact-container">
    <li v-for="item in list" :key="item.icon">
      <a href="#">
        <Icon :type="item.icon"></Icon>
        <span> {{ item.desc }}</span>
      </a>
      <div class="pop">
        <img :src="item.url"/>
      </div>
    </li>
  </ul>
</template>

<script>
import Icon from '@/components/Icon';

export default {
  props: {
    list: {
      type: Array,
      default: () => [],
    }
  },
  components: {
    Icon,
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/var.scss";
.contact-container {
  padding: 20px 0;
  color: $gray;
  $itemHeight: 30px;
  li {
    height: $itemHeight;
    line-height: $itemHeight;
    padding:14px 20px 0 20px;
    position: relative;
    &:hover {
      .pop {
        transform: scaleY(1);
      }
    }
  }
  a {
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 14px;
  }
  .icon-container {
    font-size: 20px;
    margin-right: 8px;
  }
  .pop {
    position: absolute;
    left: 20px;
    bottom: $itemHeight + 14px;
    padding: 10px 15px;
    background: #fff;
    border-radius: 5px;
    transform: scaleY(0);
    transform-origin: center bottom;
    transition: 0.3s;
    img {
      width: 150px;
      height: 150px;
      display: block;
      font-size: 0;
    }
    &::after {
      content: "";
      position: absolute;
      left: 50%;
      transform: translateX(-50%) rotate(45deg);
      width: 8px;
      height: 8px;
      background: #fff;
      bottom: -4px;
    }
  }
}
</style>