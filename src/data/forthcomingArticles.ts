/**
 * Forthcoming articles (待刊出). No external link yet; title in Chinese + English, publication status.
 * Each has a slug for its own /writing/[slug] page.
 */
export interface ForthcomingArticle {
  slug: string;
  titleZh: string;
  titleEn: string;
  status: string;
  /** 右侧配图（同一张图可复用）；留空则无图 */
  image?: string;
  /** 配图裁切位置，如 'top' 表示只显示图片最上部分 */
  imagePosition?: string;
  /** 点进文章页时显示的说明段落（不对外发布时用） */
  placeholderBody?: string;
}

export const forthcomingArticles: ForthcomingArticle[] = [
  {
    slug: 'consensus-community-reproduction-706',
    titleZh: '共识社区再生产——706青年空间的行动民族志',
    titleEn: 'Reproducing Community by Consensus: An Action Ethnography of 706 Youth Space',
    status: '南开大学，2025.',
    placeholderBody: '本文为毕业论文，暂时不对外发布和公开。文章正在修改撰写为书籍，如有兴趣后续请联系我阅读/修改。',
  },
  {
    slug: 'collective-and-individual-co-living',
    titleZh: '集体与个体，在共居中寻找自我主体性',
    titleEn: 'Collective and Individual: Searching for Subjectivity within Co-living',
    status: '《四开》（待刊出）',
    image: '/sikai-contact.png',
    imagePosition: 'top',
  },
  {
    slug: 'youth-utopias',
    titleZh: '消失又重建的青年乌托邦',
    titleEn: 'Youth Utopias: Disappearing and Rebuilding',
    status: '《四开》（待刊出）',
    image: '/sikai-contact.png',
    imagePosition: 'top',
  },
];
