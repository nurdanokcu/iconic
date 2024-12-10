import type { TypeEvent } from '~/types/general';

export interface TypeModel {
  id: number;
  name: string;
  featuredPhoto: string;
  features: string[];
  events: TypeEvent[];
}
