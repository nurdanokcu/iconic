import { pagePaths } from "~/config/paths";

export const makeModelPath = (slug: string) => `${pagePaths.models}/${slug}`;
export const makeProjectPath = (slug: string) => `${pagePaths.projects}/${slug}`;
export const makeBlogPath = (slug: string) => `${pagePaths.blogs}/${slug}`;