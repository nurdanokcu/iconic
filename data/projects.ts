import {
  modelSeven,
  modelEight,
  modelNine,
  modelTen,
} from '~/assets/images';
import type { TypeProject } from '~/types/projects';
import { events } from '~/data/events';
import { moreModels } from '~/data/models';

export const singleProject: TypeProject = {
  id: 1,
  name: 'A New Face for Fashion',
  description: 'Our latest project was a collaboration with a leading fashion brand to find the next big face for their upcoming campaign. We held open casting calls across Germany, and after a rigorous selection process, we were thrilled to find our winner. Our latest project was a collaboration with a leading fashion brand to find the next big face for their upcoming campaign. We held open casting calls across Germany, and after a rigorous selection process, we were thrilled to find our winner.Our latest project was a collaboration with a leading fashion brand to find the next big face for their upcoming campaign. We held open casting calls across Germany, and after a rigorous selection process, we were thrilled to find our winner.Our latest project was a collaboration with a leading fashion brand to find the next big face for their upcoming campaign. We held open casting calls across Germany, and after a rigorous selection process, we were thrilled to find our winner.',
  date: '21/07/2023',
  slug: 'a-new-face-for-fashion',
  pictures: [modelSeven, modelEight, modelNine, modelTen],
  event: events[0],
  featuredModels: [moreModels[0], moreModels[1], moreModels[2], moreModels[3]],
};
