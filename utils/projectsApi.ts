import type { AsyncData } from 'nuxt/app';
import type { TypeProject } from '~/types/projects';

interface ResponseProjects {
  data: TypeProject[];
}
interface ResponseSingleProject {
  data: TypeProject;
}
interface ErrorType {
  message: string;
}
export const projectsApi = () => {
  const fetchProjectsSSR = async () => {
    const requestURL = '/api/v1/projects';
    const response = await useFetchWrapper(requestURL, {
      method: 'GET',
    });
    return response as AsyncData<ResponseProjects, ErrorType>;
  };
  const fetchSingleProjectsSSR = async (slug: string) => {
    const requestURL = '/api/v1/projects/' + slug;
    const response = await useFetchWrapper(requestURL, {
      method: 'GET',
    });
    return response as AsyncData<ResponseSingleProject, ErrorType>;
  };
  const fetchFeaturedClient = async () => {
    const requestURL = '/api/v1/projects?is_featured=true';
    const response = await fetchWrapper<ResponseSingleProject>(requestURL, {
      method: 'GET',
    });
    return response;
  };
  return {
    fetchProjectsSSR,
    fetchSingleProjectsSSR,
    fetchFeaturedClient,
  };
};
