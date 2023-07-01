import axios from "axios";
import qs from "qs";
import { showMessage } from "@/utils";

/* 库的默认配置， 实例的默认配置，请求的config参数。
  后者将优先于前者
 */

const ins = axios.create({});

ins.interceptors.request.use(req => {
  console.log(req);
  return req;
})

ins.interceptors.response.use(res => {
  if (res.data.code !== 0) {
    showMessage({
      content: res.data.msg,
      type: "error",
      duration: 1500,
    });
    return null;
  }
  return res.data.data;
})

/**
 * @description: get请求
 * @param {string} url 链接
 * @param {object} params 请求参数
 * @param {object} config 请求配置
 * @return {*}
 */
export const get = (url,params={},config={}) => {
  return ins.get(url,{
    params,
    ...config,
  })
}

/**
 * @description: post请求
 * @param {*} url 链接
 * @param {*} data 请求参数
 * @param {*} config 请求配置
 * @return {*}
 */
export const post = (url,data={},config={}) => {
  return ins.post(url,qs.stringify(data),config)
}
