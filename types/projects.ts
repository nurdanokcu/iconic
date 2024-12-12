import type { TypeEvent } from "~/types/general";

export interface TypeProject {
  id: number;
  name: string;
  date: string;
  featured_description: string;
  featured_pictures: string[];
  pictures: string[];
  description: string;
  event: TypeEvent;
  featured_models: {
    id: number;
    name: string;
    role: string;
    featured_photo: string;
    slug: string;
  }[];
  slug: string;
  next_project_slug: string | null;
}
