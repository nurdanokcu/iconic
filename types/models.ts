import type { TypeProject } from './projects';
import type { TypeEvent } from '~/types/general';

export interface TypeModel {
  id: number;
  name: string;
  featured_photo: string;
  characteristics: string[];
  role: string;
  slug: string;
  events: TypeEvent[];
}
export interface TypeModelDetailed {
  id: number;
  name: string;
  featured_photo: string;
  cover_photo: string;
  characteristics: string[];
  events: TypeEvent[];
  featured_projects: TypeProject | null;
  images: string[];
  role: string;
  slug: string;
  is_promotional: boolean;
}

export interface TypeModelQuery {
  event_type_id?: string;
  limit?: string;
  offset?: string;
}
