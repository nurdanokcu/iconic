import { type TypeEvent } from "~/types/general";
export interface TypeBlog {
  id: number;
  title: string;
  featuredPhoto?: string;
  content: string;
  isFeatured: boolean;
  author: {
    id: number;
    name: string;
  };
  event: TypeEvent;
}
