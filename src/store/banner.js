  import { getBanners } from "@/apis";

  export default {
    namespaced: true,
    state: {
      loading: false,
      banners: [],
    },
    mutations: {
      setLoading(state, payload) {
        state.loading = payload;
      },
      setData(state, payload) {
        state.banners = payload;
      },
    },
    actions: {
      async fetchBanner(ctx) {
        if (ctx.state.banners.length) {
          return;
        }
        ctx.commit("setLoading", true);
        const resp = await getBanners();
        ctx.commit("setData", resp);
        ctx.commit("setLoading", false);
      },
    },
  };
