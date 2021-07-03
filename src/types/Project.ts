import { Technos } from '../data/projects';

export type Project = {
  title: string;
  technos: Technos[];
  imgUrl: string;
  description: string;
  challenges: string;
};
