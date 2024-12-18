interface HomepageFeaturedModel {
  id: number;
  name: string;
  slug: string;
  role: string;
  featured_photo: string;
  characteristics: string[];
  events: {
    id: number;
    name: string;
    slug: string;
    primary_icon: string;
    secondary_icon: string;
  }[];
  is_promotional: boolean;
}

export interface GlobalSettings {
  homepage_primary_image: string;
  homepage_secondary_image: string;
  website_logo: string;
  homepage_slider_images: string[];
  client_logos: string[];
  homepage_featured_model: HomepageFeaturedModel;
}
