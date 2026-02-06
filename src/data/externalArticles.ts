/**
 * External articles (published elsewhere). Title + URL; optional source/year line.
 * Each article also has a slug used for internal /writing/[slug] pages.
 */
export interface ExternalArticle {
  slug: string;
  title: string;
  titleEn?: string;
  url: string;
  sourceLine?: string;
  image?: string;
}

export const externalArticles: ExternalArticle[] = [
  {
    slug: 'community-the-60s',
    title: '60年代的社区遗产：生态村、太阳朋克与安那其',
    titleEn: 'The Community Legacy of the 1960s: Ecovillages, Solarpunk, and Anarchy',
    url: 'https://blog.uncommons.cc/community-the-60s/',
    sourceLine: 'Uncommons，2025',
    image: '/community-legacy.png',
  },
  {
    slug: 'malaysia-travel-notes',
    title: '马来西亚行记：从地方生出的触角，跨越地域与种族',
    titleEn:
      'Travel Notes from Malaysia: Tendrils Emerging from Place, Crossing Regions and Ethnicities',
    url: 'https://mp.weixin.qq.com/s/-0U_xeCPbDnO4J8-1vqUYQ',
    sourceLine: '生活力场，2025',
    image: '/malaysia-map.png',
  },
];
