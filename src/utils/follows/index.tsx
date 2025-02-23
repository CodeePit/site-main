import { iFollows } from '@/types/follows';
import codepit from '@/assets/img/codepit.png';
import Instagram from '@/assets/img/isntagram.jpg';
import GitHub from '@/assets/img/github.png';
import Linkedin from '@/assets/img/linkedin.webp';
export const FollowsArray: iFollows[] = [
  {
    id: 1,
    label: 'Instagram',
    link: 'https://www.instagram.com/Codepit_/',
    name: '@Codepitd_',
    logo: codepit,
    img: Instagram,
  },
  {
    id: 2,
    label: 'Github',
    link: 'https://github.com/CodepitDigital',
    name: '@CodepitDigital',
    logo: codepit,
    img: GitHub,
  },
  {
    id: 3,
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/afonso-bezerra-33b495174/',
    name: '@Codepit',
    logo: codepit,
    img: Linkedin,
  },
];
