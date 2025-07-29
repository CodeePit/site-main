import codepit from '@/assets/img/codepit.png';
import GitHub from '@/assets/img/github.png';
import Instagram from '@/assets/img/isntagram.jpg';
import Linkedin from '@/assets/img/linkedin.webp';
import { iFollows } from '@/types/follows';
export const FollowsArray: iFollows[] = [
  {
    id: 1,
    label: 'Instagram',
    link: 'https://www.instagram.com/Codepit_/',
    name: '@Codepit_',
    logo: codepit,
    img: Instagram,
  },
  {
    id: 2,
    label: 'Github',
    link: 'https://github.com/CodeePit',
    name: '@CodepitDigital',
    logo: codepit,
    img: GitHub,
  },
  {
    id: 3,
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/company/codeepit/',
    name: '@Codepit',
    logo: codepit,
    img: Linkedin,
  },
];
