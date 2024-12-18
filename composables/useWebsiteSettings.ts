import type { GlobalSettings } from '~/types/globalSettings';
import {
  image01,
  image02,
  carIcon,
  slider01,
  slider02,
  slider03,
  slider04,
  slider05,
} from '~/assets/images';
import { audi, bmw, ilm, interTabac } from '~/assets/images/clients';

export function useWebsiteSettings() {
  const globalSettings = useState(
    'globalSettings',
    (): GlobalSettings => ({
      homepage_primary_image: image01,
      homepage_secondary_image: image02,
      website_logo: '/logo.png',
      homepage_slider_images: [slider01, slider02, slider03, slider04, slider05],
      client_logos: [audi, interTabac, ilm, bmw],
      homepage_featured_model: {
        id: 0,
        name: 'AISHWARYA GUPTA',
        slug: '',
        role: '',
        featured_photo: '',
        characteristics: [
          '5\'10"',
          'shoe 9',
          'size 2',
          'h34',
          'w24',
          'b32',
          'hair brown',
          'eyes brown',
        ],
        events: [
          {
            id: 1,
            name: 'Car Shows',
            primary_icon: carIcon,
            secondary_icon: carIcon,
            slug: 'fashion',
          },
        ],
        is_promotional: false,
      },
    }),
  );

  return {
    globalSettings,
  };
}
