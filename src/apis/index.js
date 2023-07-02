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
