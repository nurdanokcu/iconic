import type { TypeProject } from './projects';
import type { TypeEvent } from '~/types/general';

export interface TypeModel {
  id: number;
  name: string;
  featured_photo: string;
  cover_photo: string;
  characteristics: string[];
  events: TypeEvent[];
  featured_project: TypeProject | null;
  images: string[];
  role: string;
  slug: string;
  is_promotional: boolean;
}
