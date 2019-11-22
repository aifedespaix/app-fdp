import {ImageType} from '../../_generated/graphql.schema';
import * as faker from 'faker';

export function getImageMock(width: number): ImageType {
  const image = new ImageType();
  image.url = faker.image.imageUrl(width);
  image.width = width;
  return image;
}

export function getImagesMock(nb: number): ImageType[] {
  const images = [];
  for (let i = 1; i <= nb; i++) {
    images.push(getImageMock(100 * i));
  }
  return images;
}
