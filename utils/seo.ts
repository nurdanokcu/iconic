export function useSeoHead(title: string, description: string) {
  const config = useRuntimeConfig();
  const websiteUrl = config.public.domain;

  useHead({
    htmlAttrs: {
      lang: 'en',
    },
    title,
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon.ico',
      },
    ],
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: description,
        tagPriority: 1,
      },
      { hid: 'og:title', property: 'og:title', content: title, tagPriority: 1 },
      {
        hid: 'og:description',
        property: 'og:description',
        content: description,
        tagPriority: 1,
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: `${websiteUrl}/og-image.png`,
        tagPriority: 1,
      },
      {
        hid: 'og:image:width',
        property: 'og:image:width',
        content: '1200',
        tagPriority: 1,
      },
      {
        hid: 'og:image:height',
        property: 'og:image:height',
        content: '630',
        tagPriority: 1,
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: title,
        tagPriority: 1,
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: websiteUrl,
        tagPriority: 1,
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website',
        tagPriority: 1,
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'Iconic Modeling Agency',
        tagPriority: 1,
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: title,
        tagPriority: 1,
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: description,
        tagPriority: 1,
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
        tagPriority: 1,
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: `${websiteUrl}/twitter-image.png`,
        tagPriority: 1,
      },
    ],
  });
}
