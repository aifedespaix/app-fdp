import {PictureType} from '../../_generated/graphql.schema';
import * as faker from 'faker';
import {getImagesMock} from '../../image/tests/image.mocks';

export function getUndefinedPictureMock(): PictureType {
  const picture = new PictureType();
  picture.images = [{
    url: '/assets/images/undefined.jpg',
    width: 900,
    height: 900,
    id: '0'
  }];
  return picture;
}

export function getPictureMock(): PictureType {
  const picture = new PictureType();
  picture.id = faker.random.uuid();
  picture.createdAt = new Date();
  picture.updatedAt = new Date();
  picture.title = faker.name.title();
  picture.description = faker.lorem.paragraph(1);
  picture.images = getImagesMock(6);
  return picture;
}

export function getPicturesMock(nb: number): PictureType[] {
  const pictures = [];
  for (let i = 0; i < nb; i++) {
    pictures.push(getPictureMock());
  }
  return pictures;
}
