import { getUserInfo, loginOut } from '@/apis'

export default {
  namespaced: true, // 开启命名空间
  state: {
    loading: false,
    user: localStorage.getItem('user'),
  },
  getters: {
    status(state) {
      if (state.loading) {
        return "loading";
      } else if (state.user) {
        return "login";
      } else {
        return "unLogin";
      }
    },
  },
  mutations: {
    setLoading(state, payload) {
      state.loading = payload;
    },
    setUser(state, payload) {
      state.user = payload;
    },
  },
  actions: {
    async login(ctx, payload) {
      try {
        ctx.commit("setLoading", true);
        const resp = await getUserInfo();
        ctx.commit("setUser", resp);
        ctx.commit("setLoading", false);
        localStorage.setItem('user', resp);
        return resp;
      } catch (error) {
      }
    },
    async loginOut(ctx) {
      try {
        ctx.commit("setLoading", true);
        await loginOut();
        ctx.commit("setUser", null);
        ctx.commit("setLoading", false);
        localStorage.removeItem('user');
      } catch (error) {
        
      }
    },
  },
};
