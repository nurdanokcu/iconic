import type { AsyncData } from 'nuxt/app';
import type { TypeBlog } from '~/types/blogs';

interface ResponseBlogs {
  data: TypeBlog[];
}
interface ResponseSingleBlog {
  data: TypeBlog;
}
interface ErrorType {
  message: string;
}
export const blogsApi = () => {
  const fetchBlogsSSR = async (queryParams = {}) => {
    const queryString = new URLSearchParams(queryParams).toString();
    const requestURL = `/api/v1/blogs${
      queryString ? `?${queryString}` : ''
    }`;
    const response = await useFetchWrapper(requestURL, {
      method: 'GET',
    });
    return response as AsyncData<ResponseBlogs, ErrorType>;
  };

  const fetchBlogsClient = async (queryParams = {}) => {
    const queryString = new URLSearchParams(queryParams).toString();
    const requestURL = `/api/v1/blogs${
      queryString ? `?${queryString}` : ''
    }`;
    const response = await fetchWrapper<ResponseBlogs>(requestURL, {
      method: 'GET',
    });
    return response;
  };
  const fetchSingleBlogSSR = async (slug: string) => {
    const requestURL = '/api/v1/blogs/' + slug;
    const response = await useFetchWrapper(requestURL, {
      method: 'GET',
    });
    return response as AsyncData<ResponseSingleBlog, ErrorType>;
  };

  return {
    fetchBlogsSSR,
    fetchBlogsClient,
    fetchSingleBlogSSR,
  };
};
