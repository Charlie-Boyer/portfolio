import tetris from '../images/tetris.png';

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
    technos: [Technos.HTML, Technos.CSS, Technos.REACT],
    imgUrl: tetris,
    description: 'Ce projet est une copie de Tetris réalisée en React.',
    challenges:
      "Algorythmes et structures de données avancées, gestion d'état et closures, variables d'instances et useRef()",
  },
  {
    title: 'Portfolio',
    technos: [Technos.HTML, Technos.CSS, Technos.REACT, Technos.TYPESCRIPT],
    imgUrl: 'images/portfolio.png',
    description: 'Mon portfolio',
    challenges:
      'Architecture de projet, Utilisation de la librairie framer motion',
  },
  {
    title: 'Allocrew',
    technos: [
      Technos.HTML,
      Technos.CSS,
      Technos.REACT,
      Technos.NODEJS,
      Technos.WEBSOCKET,
    ],
    imgUrl: 'images/allocrew.png',
    description: 'Application front du projet Allocrew',
    challenges:
      'Architecture de projet, utilisation de React Context, Authentification et autorisation, LocalStorage et JWTtoken, Messagerie instantannée',
  },
];

export default projectList;
