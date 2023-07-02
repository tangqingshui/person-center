<template>
  <div class="pager-container">
    <icon type="arrowLeft" @click.native="onClick(current - 1)" :class="{ disabled: current <= 1 }" class="icon" />
    <a @click="onClick(1)" :class="{ active: 1 === current }">
      1
    </a>
    <pager-icon isLeftArrow v-show="visibleMin > 2" @click.native="onClick(visibleMin - 1)" class="icon" />
    <a @click="onClick(n)" v-for="(n, i) in  visiblePages" :key="i" :class="{ active: n === current }">
      {{ n }}
    </a>
    <pager-icon v-show="visibleMax < pageNumber - 1" @click.native="onClick(visibleMax + 1)" class="icon" />
    <a v-if="total > 1" @click="onClick(pageNumber)" :class="{ active: pageNumber === current }">
      {{ pageNumber }}
    </a>
    <icon type="arrowRight" @click.native="onClick(current + 1)" :class="{ disabled: current >= pageNumber }" class="icon" />
  </div>
</template>

<script>
import Icon from '@/components/Icon';
import PagerIcon from './PagerIcon';

export default {
  components: { PagerIcon, Icon },
  props: {
    // 当前页
    current: {
      type: Number,
      default: 1,
    },
    // 总数
    total: {
      type: Number,
      default: 0,
    },
    // 一页显示的条数限制
    limit: {
      type: Number,
      default: 10,
    },
    // 显示的页码数
    visibleNumber: {
      type: Number,
      default: 5,
    },
  },
  computed: {
    // 总页数
    pageNumber() {
      return Math.ceil(this.total / this.limit);
    },
    // 显示的最小页码数
    visibleMin() {
      const min = this.current - Math.floor(this.visibleNumber / 2);
      return min <= 2 ? 2 : min;
    },
    // 显示的最大页码数
    visibleMax() {
      const max = this.visibleMin + this.visibleNumber - 1;
      return max >= this.pageNumber ? this.pageNumber - 1 : max;
    },
    // 显示的页码数
    visiblePages() {
      const visiblePages = [];
      for (let i = this.visibleMin; i <= this.visibleMax; i++) {
        visiblePages.push(i);
      }
      return visiblePages;
    },
  },
  methods: {
    onClick(page) {
      if (page < 1 || page > this.pageNumber || page === this.current) {
        return;
      }
      this.$emit('pageChange', page);
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/var.scss";

.pager-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;

  a,
  .icon {
    color: $words;
    margin: 0 6px;
    cursor: pointer;
    user-select: none;

    &.disabled {
      color: $lightWords;
      cursor: not-allowed;

      &:hover {
        color: inherit;
      }
    }

    &.active {
      color: $primary;
    }

    &:hover {
      color: $primary;
    }
  }
}
</style>