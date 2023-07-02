export default class TextAnimation {
  constructor() {
  }
  init(dom) {
    this.dom = dom;
    this.clientWidth = dom.clientWidth;
  }
  show(time=1,delay=0) {
    this.dom.style.opacity = 1;
    this.dom.style.width = 0;
    // 强制让浏览器渲染一次
    this.dom.clientWidth; // reflow
    this.dom.style.transition = `${time}s ${delay}s`;
    this.dom.style.width = `${this.clientWidth}px`;
  }
  hidden() {
    this.dom.opacity = 0;
    this.dom.style.width = 0;
  }
}