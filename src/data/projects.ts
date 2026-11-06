/**
 * Project entries. Edit this file to maintain content; layout stays in pages/components.
 */
export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  descriptionEn?: string;
  longDescriptionZh?: string;
  longDescriptionEn?: string;
  href?: string;
  sourceUrl?: string;
  year?: string;
  tags?: string[];
}

export const projects: Project[] = [
  {
    id: 'zhine-nexus',
    slug: 'zhine-nexus',
    title: '知合 Nexus',
    shortDescription: '大学无法提供我们想要的知识和共同体，于是我们在校外创建它。',
    descriptionEn: 'Universities did not provide the knowledge and community we sought, so we created it beyond the campus.',
   longDescriptionZh:
      '知合是一个教育创新组织，也是一个青年网络，我们将走向这个国家的文化平原，那些山峰和盆地之间的广阔地带——那里有无数青年正在寻找路径。我们将展开一场新的实验，用圆桌的方式，连接两个不同但又相似的群体——领读人与共读人。我们也将与无数的地方文化、教育组织互动，与一群有着求索之心的人一起——追问、探寻、分享。',
   longDescriptionEn:
      'Nexus is an educational innovation organization and a youth network. We are moving toward the cultural plains of this country—the vast spaces between mountains and basins—where countless young people are searching for their own paths. We will launch a new experiment, using the roundtable as a form to connect two distinct yet kindred groups: lead readers and co-readers. We will also engage with numerous local cultural and educational organizations, and join a community of people driven by inquiry to question, explore, and share together.',
    href: 'https://zhihenexus.org',
  },
  {
    // References: https://dweller.live and https://www.sohu.com/a/1080933467_538967
    id: 'dweller',
    slug: 'dweller',
    title: 'Dweller · 不孤独大厦',
    shortDescription: '在上海，以共居连接日常生活，让城市里的人拥有可以相互支持的附近。',
    descriptionEn: 'A co-living community in Shanghai, building everyday connections and a neighborhood of mutual support.',
    longDescriptionZh: 'Dweller 以共享客厅、厨房和工作空间连接伙伴，同时保留独立的私人空间。共餐、分享、放映与工作坊，让共同生活逐渐成为基于兴趣、信任与共同选择的社会支持网络。',
    longDescriptionEn: 'Shared living rooms, kitchens and workspaces bring residents together while preserving private space. Meals, conversations, screenings and workshops nurture a network of care grounded in shared interests, trust and the choice to live together.',
    href: 'https://dweller.live',
  },
  {
    // References: https://www.gccofficial.org/project and the Youthology introduction above.
    id: 'hehe-university',
    slug: 'hehe-university',
    title: '合禾联大 · Harmony academy',
    shortDescription: '走出传统教室，在真实的人与社会中学习。',
    descriptionEn: 'Learning beyond the classroom, through encounters with people and society.',
    longDescriptionZh: '合禾联大以共学与行动研究支持青年探索公益慈善、社会创新和公共生活。通过社科共读、师友对谈、主题参访与田野研习，将学习带入具体处境，在对话与实践中发展公共精神。',
    longDescriptionEn: 'Harmony academy brings shared learning and action research into young people’s exploration of philanthropy, social innovation and public life. Reading groups, mentoring conversations, visits and fieldwork connect inquiry with lived experience and public engagement.',
    href: 'https://real-zomia.vercel.app',
    sourceUrl: 'https://www.gccofficial.org/project',
  },
];
