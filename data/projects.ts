import {
  slider01,
  slider02,
  slider03,
  slider04,
  slider05,
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
import type { TypeProject } from '~/types/projects';
import { events } from '~/data/events';

export const singleProject: TypeProject = {
  id: 1,
  name: 'A New Face for Fashion',
  featured_description:
    'Our latest project was a collaboration with a leading fashion brand to find the next big face for their upcoming campaign. We held open casting calls across Germany, and after a rigorous selection process, we were thrilled to find our winner.Our latest project was a collaboration with a leading fashion brand to find the next big face for their upcoming campaign. We held open casting calls across Germany, and after a rigorous selection process, we were thrilled to find our winner.',
  date: '21/07/2023',
  slug: 'a-new-face-for-fashion',
  featured_pictures: [slider01, slider02, slider03],
  pictures: [slider04, slider05],
  description:
    '<div><p>We were recently approached by a young woman who had always dreamed of becoming a model. She had never had any professional experience, but she was determined to make her dream a reality. We worked with her to develop her portfolio and prepare for casting calls.</p><p>We are proud to represent some of the most successful models in the world. These models have achieved great things in their careers, and we are honored to be a part of their journey.</p></div>',
  event: events[3],
  featured_models: [
    {
      id: 1,
      name: 'Aishawarya gupta',
      role: 'Lead Model',
      featured_photo: modelOne,
      slug: 'aishwarya-gupta',
    },
    {
      id: 2,
      name: 'Jessica',
      role: 'Model',
      featured_photo: modelTwo,
      slug: 'jessica',
    },
    {
      id: 3,
      name: 'Katrina',
      role: 'Model',
      featured_photo: modelThree,
      slug: 'katrina',
    },
  ],
  next_project_slug: 'art-of-beauty',
};

export const singleProject1: TypeProject = {
  id: 2,
  name: 'Art of Beauty',
  featured_description:
    'A sophisticated cosmetic-themed event where art and beauty merged to redefine modern aesthetics.A sophisticated cosmetic-themed event where art and beauty merged to redefine modern aesthetics.A sophisticated cosmetic-themed event where art and beauty merged to redefine modern aesthetics.',
  date: '15/09/2023',
  slug: 'art-of-beauty',
  featured_pictures: [slider04, slider05, slider03],
  pictures: [slider01, slider02],
  description:
    '<div><p>We collaborated with top cosmetic brands to host an event that reimagined beauty standards. The show featured avant-garde makeup artists and their creative interpretations.</p><p>The event left a lasting impression, inspiring new trends in the industry.</p></div>',
  event: events[1],
  featured_models: [
    {
      id: 4,
      name: 'KAREENA',
      role: 'Model',
      slug: 'kareena',
      featured_photo: modelFour,
    },
    {
      id: 5,
      name: 'LARA',
      slug: 'lara',
      role: 'Model',
      featured_photo: modelFive,
    },
    {
      id: 6,
      name: 'EMILIA',
      role: 'Model',
      slug: 'emilia',
      featured_photo: modelSix,
    },
  ],
  next_project_slug: 'icons-of-the-auto-world',
};

export const singleProject2: TypeProject = {
  id: 3,
  name: 'Icons of the Auto World',
  featured_description:
    'An extraordinary celebration of automotive excellence, from classic cars to modern marvels.',
  date: '10/05/2023',
  slug: 'icons-of-the-auto-world',
  featured_pictures: [slider02, slider01, slider05],
  pictures: [slider03, slider04],
  description:
    '<div><p>We worked with an automotive giant to host a grand event featuring iconic vehicles. From vintage classics to futuristic designs, this showcase celebrated engineering brilliance.</p><p>It was an unforgettable experience for car enthusiasts worldwide.</p></div>',
  event: events[0],
  featured_models: [
    {
      id: 7,
      name: 'Ava Anderson',
      slug: 'ava-anderson',
      role: 'Model',
      featured_photo: modelSeven,
    },
    {
      id: 8,
      name: 'Bella Carter',
      role: 'Model',
      slug: 'bella-carter',
      featured_photo: modelEight,
    },
    {
      id: 9,
      name: 'Stella',
      role: 'Model',
      slug: 'stella',
      featured_photo: modelNine,
    },
  ],
  next_project_slug: 'empowering-the-next-generation',
};

export const singleProject3: TypeProject = {
  id: 4,
  name: 'Empowering the Next Generation',
  featured_description:
    'An exciting tech-themed initiative that empowered the younger generation through innovation and fashion.',
  date: '28/08/2023',
  slug: 'empowering-the-next-generation',
  featured_pictures: [slider05, slider02, slider04],
  pictures: [slider03, slider01],
  description:
    '<div><p>Through a series of workshops, we introduced participants to the latest wearable tech and personal styling tools. This innovative project equipped them with both confidence and technical expertise.</p><p>Participants were inspired to embrace their individuality and creativity in the digital age.</p></div>',
  event: events[2],
  featured_models: [
    {
      id: 10,
      name: 'Mia',
      slug: 'mia',
      role: 'Brand Ambassador',
      featured_photo: modelTen,
    },
    {
      id: 7,
      name: 'Ava Anderson',
      slug: 'ava-anderson',
      role: 'Model',
      featured_photo: modelSeven,
    },
    {
      id: 4,
      name: 'KAREENA',
      role: 'Model',
      slug: 'kareena',
      featured_photo: modelFour,
    },
  ],
  next_project_slug: 'redefining-elegance',
};

export const singleProject4: TypeProject = {
  id: 5,
  name: 'Redefining Elegance',
  featured_description:
    'A timeless showcase of elegance at a car-themed event celebrating luxury and bespoke design.',
  date: '05/11/2023',
  slug: 'redefining-elegance',
  featured_pictures: [slider03, slider01, slider04],
  pictures: [slider02, slider05],
  description:
    '<div><p>The event featured bespoke jewelry designs that paired seamlessly with luxury vehicles on display. Each piece represented the perfect fusion of elegance and engineering.</p><p>The collaboration highlighted the artistry behind both industries.</p></div>',
  event: events[0],
  featured_models: [
    {
      id: 6,
      name: 'EMILIA',
      role: 'Model',
      slug: 'emilia',
      featured_photo: modelSix,
    },
    {
      id: 5,
      name: 'LARA',
      slug: 'lara',
      role: 'Model',
      featured_photo: modelFive,
    },
    {
      id: 1,
      name: 'Aishawarya gupta',
      role: 'Lead Model',
      featured_photo: modelOne,
      slug: 'aishwarya-gupta',
    },
  ],
  next_project_slug: null,
};

export const projects = [
  singleProject,
  singleProject1,
  singleProject2,
  singleProject3,
  singleProject4,
];
