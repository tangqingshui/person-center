import {get,post} from './axios'

export function getBanners() {
  return get('/api/banner');
} 


/**
 * 获取博客列表
 */
export function getBlogs(page = 1, limit = 10, categoryid = -1) {
  return get("/api/blog", {
    params: {
      page,
      limit,
      categoryid,
    },
  });
}

/**
 * 获取博客分类
 */
export function getBlogCategories() {
  return get("/api/blogtype");
}

export async function getBlog(id) {
  return await get(`/api/blog/${id}`);
}

/**
 * 提交评论
 */
export function postComment(commentInfo) {
  return post(`/api/comment`, commentInfo);
}

export function getComments(blogid, page = 1, limit = 10) {
  return get("/api/comment", {
    params: {
      blogid,
      page,
      limit,
    },
  });
}

export const getUserInfo = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => { 
      Math.random() > 0.5 ? resolve('user') : reject(null); 
    }, 4000)
  })
}

export const loginOut = () => {
  return  new Promise((resolve, reject) => {
    setTimeout(() => { 
      Math.random() > 0.5 ? resolve(true) : reject(null); 
    }, 4000)
  })
}