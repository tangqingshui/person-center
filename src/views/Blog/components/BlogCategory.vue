<template>
  <div class="blog-category-container" v-loading="loading">
    <h2>文章分类</h2>
    <RightList :list="list" @select="handleSelect" />
  </div>
</template>

<script>
import RightList from "./RightList";
import { getBlogCategories } from "@/apis";
export default {
  components: {
    RightList,
  },
  data() {
    return {
      categoryList: [],
      loading: false,
    }
  },
  computed: {
    categoryId() {
      return +this.$route.params.categoryId || -1;
    },
    limit() {
      return +this.$route.query.limit || 10;
    },
    list() {
      const totalArticleCount = this.categoryList.reduce(
        (a, b) => a + b.articleCount,
        0
      );

      const result = [
        { name: "全部", id: -1, articleCount: totalArticleCount },
        ...this.categoryList,
      ];
      return result.map((it) => ({
        ...it,
        isSelect: it.id === this.categoryId,
        aside: `${it.articleCount}篇`,
      }));
    },
  },
  methods: {
    async fetchData() {
      try {
        this.loading = true;
        this.categoryList = await getBlogCategories();
        this.loading = false;
      } catch (error) {
        this.loading = false;
      }
    },
    handleSelect(item) {
      const query = {
        page: 1,
        limit: this.limit,
      };
      // 跳转到 当前的分类id  当前的页容量  newPage的页码
      if (item.id === -1) {
        this.$router.push({
          name: "blog",
          query,
        });
      } else {
        this.$router.push({
          name: "categoryBlog",
          query,
          params: {
            categoryId: item.id,
          },
        });
      }
    },
  },
  created() {
    this.fetchData();
  }
};
</script>

<style scoped lang="scss">
.blog-category-container {
  width: 300px;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  height: 100%;
  overflow-y: auto;
  h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1em;
    margin: 0;
  }
}
</style>
