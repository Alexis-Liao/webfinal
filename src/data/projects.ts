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
  },
];
