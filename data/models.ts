import {
  modelOne,
  modelTwo,
  modelThree,
  modelFour,
  modelFive,
  modelSix,
  modelSeven,
  modelEight,
  modelNine,
  modelTen,
} from '~/assets/images';
import type { TypeModel } from '~/types/models';
import { events } from '~/data/events';

export const singleModal: TypeModel = {
  id: 1,
  name: 'AISHWARYA',
  featuredPhoto: modelOne,
  features: [
    '5\'10"',
    'shoe 9',
    'size 2',
    'h34',
    'w24',
    'b32',
    'hair brown',
    'eyes brown',
  ],
  events: [events[0], events[1], events[2]],
};

export const models: TypeModel[] = [
  {
    ...singleModal,
  },
  {
    ...singleModal,
    id: 2,
    name: 'JESSICA',
    featuredPhoto: modelTwo,
    events: [events[0], events[1], events[3]],
  },
  {
    ...singleModal,
    id: 3,
    name: 'KATRINA',
    featuredPhoto: modelThree,
    events: [events[1], events[2], events[3]],
  },
  {
    ...singleModal,
    id: 4,
    name: 'KAREENA',
    featuredPhoto: modelFour,
    events: [events[0], events[3]],
  },
  {
    ...singleModal,
    id: 5,
    name: 'LARA',
    featuredPhoto: modelFive,
    events: [events[0], events[1]],
  },
  {
    ...singleModal,
    id: 6,
    name: 'EMILIA',
    featuredPhoto: modelSix,
    events: [events[3]],
  },
];
export const moreModels: TypeModel[] = [
  {
    ...singleModal,
    id: 7,
    name: 'Charlotte',
    featuredPhoto: modelSeven,
    events: [events[0], events[1], events[2]],
  },
  {
    ...singleModal,
    id: 8,
    name: 'Hanna',
    featuredPhoto: modelEight,
    events: [events[3]],
  },
  {
    ...singleModal,
    id: 9,
    name: 'Stella',
    featuredPhoto: modelNine,
    events: [events[1], events[2], events[3]],
  },
  {
    ...singleModal,
    id: 10,
    name: 'Mia',
    featuredPhoto: modelTen,
    events: [events[0], events[3]],
  },
];