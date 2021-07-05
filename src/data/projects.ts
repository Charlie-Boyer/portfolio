import tetris from '../images/tetris.jpg';
import portfolio from '../images/portfolio.jpg';
import allocrew from '../images/allocrew.jpg';

export enum Technos {
  HTML,
  CSS,
  JAVASCRIPT,
  TYPESCRIPT,
  NODEJS,
  REACT,
  WEBSOCKET,
}

const projectList = [
  {
    title: 'Tetris Game',
    url: 'https://puzl.charlie-boyer.me',
    technos: [Technos.HTML, Technos.CSS, Technos.REACT],
    imgUrl: tetris,
    description: 'Ce projet est une copie de Tetris réalisée en React.',
    challenges:
      "Algorythmes et structures de données avancées, gestion d'état et closures, variables d'instances et useRef()",
  },
  {
    title: 'Portfolio',
    url: 'https://www.charlie-boyer.me',
    technos: [Technos.HTML, Technos.CSS, Technos.REACT, Technos.TYPESCRIPT],
    imgUrl: portfolio,
    description: 'Mon portfolio',
    challenges:
      'Architecture de projet, Utilisation de la librairie framer motion',
  },
  {
    title: 'Allocrew',
    url: 'https://allocrew.herokuapp.com/',
    technos: [
      Technos.HTML,
      Technos.CSS,
      Technos.REACT,
      Technos.NODEJS,
      Technos.WEBSOCKET,
    ],
    imgUrl: allocrew,
    description: 'Application front du projet Allocrew',
    challenges:
      'Architecture de projet, utilisation de React Context, Authentification et autorisation, LocalStorage et JWTtoken, Messagerie instantannée',
  },
];

export default projectList;
