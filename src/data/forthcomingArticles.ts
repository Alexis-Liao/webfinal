/**
 * Forthcoming articles (待刊出). No external link yet; title in Chinese + English, publication status.
 * Each has a slug for its own /writing/[slug] page.
 */
export interface ForthcomingArticle {
  slug: string;
  titleZh: string;
  titleEn: string;
  status: string;
}

export const forthcomingArticles: ForthcomingArticle[] = [
  {
    slug: 'collective-and-individual-co-living',
    titleZh: '集体与个体，在共居中寻找自我主体性',
    titleEn: 'Collective and Individual: Searching for Subjectivity within Co-living',
    status: '《四开》（待刊出）',
  },
  {
    slug: 'youth-utopias',
    titleZh: '消失又重建的青年乌托邦',
    titleEn: 'Youth Utopias: Disappearing and Rebuilding',
    status: '《四开》（待刊出）',
  },
];
