import Vue from 'vue';

/**
 * @description: 获取组件的根实例
 * @param {*} comp
 * @param {*} props
 * @return {*}
 */
export default function(comp, props) {
  const vm = new Vue({
    render(h) {
      return h(comp,{props});
    }
  })
  vm.$mount();
  return vm.$el;
}