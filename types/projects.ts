import type { TypeEvent } from '~/types/general';
import type { TypeModel } from '~/types/models';

export interface TypeProject {
  id: number;
  name: string;
  date: string;
  description: string;
  pictures: string[];
  event: TypeEvent;
  featuredModels: TypeModel[];
  slug: string;
}