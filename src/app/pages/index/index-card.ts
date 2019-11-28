import {PictureType} from '../../model/_generated/graphql.schema';

export interface IIndexCard {
  link: string;
  title: string;
  picture: PictureType;
  description: string;
}
