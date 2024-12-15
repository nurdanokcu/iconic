import type { TypeEvent } from '~/types/general';

export interface TypeNextBlog {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  author: {
    id: number;
    name: string;
  };
  event: TypeEvent | null;
  featured_photo?: string;
}
export interface TypeBlog {
  id: number;
  title: string;
  featured_photo?: string;
  excerpt: string;
  content: string;
  is_featured: boolean;
  slug: string;
  author: {
    id: number;
    name: string;
  };
  event: TypeEvent | null;
  next_blog: TypeNextBlog | null;
}
