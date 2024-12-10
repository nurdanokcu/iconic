import type { TypeEvent } from '~/types/general';

export interface TypeBlog {
  id: number;
  title: string;
  featuredPhoto?: string;
  content: string;
  isFeatured: boolean;
  slug: string;
  author: {
    id: number;
    name: string;
  };
  event: TypeEvent;
}
