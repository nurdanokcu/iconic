import { pagePaths } from '~/config/paths';
import type { SitemapUrlInput } from '#sitemap/types';

interface ResponseSitemapData {
  status: string;
  data: {
    type: 'EventType' | 'Blog' | 'Project' | 'FashionModel';
    slug: string;
    last_modified: string;
  }[];
}

export default defineSitemapEventHandler(async () => {
  const links: SitemapUrlInput[] = [];
  const config = useRuntimeConfig();
  const endpoint = config.public.baseURL + '/api/v1/sitemap';

  try {
    const response = await $fetch<ResponseSitemapData>(endpoint, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      method: 'GET',
    });

    if (response.status === 'success' && Array.isArray(response.data)) {
      const modelsLinks = response.data
        .filter(item => item.type === 'FashionModel')
        .map(model => ({
          loc: `${pagePaths.models}/${model.slug}`,
          lastmod: model.last_modified,
        }));

      const projectsLinks = response.data
        .filter(item => item.type === 'Project')
        .map(project => ({
          loc: `${pagePaths.projects}/${project.slug}`,
          lastmod: project.last_modified,
        }));

      const blogsLinks = response.data
        .filter(item => item.type === 'Blog')
        .map(blog => ({
          loc: `${pagePaths.blogs}/${blog.slug}`,
          lastmod: blog.last_modified,
        }));

      links.push(...modelsLinks, ...projectsLinks, ...blogsLinks);
    }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return [];
  }

  return links;
});
