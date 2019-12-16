import {PictureType, ResourceType} from '../_generated/graphql.schema';
import * as faker from 'faker';
import {getImagesMock} from '../image/image.mocks';

export function getUndefinedPictureMock(): PictureType {
  const picture = new PictureType();
  picture.title = 'aifedespaix';
  picture.description = 'logo aifedespaix';
  picture.images = [{
    url: '/assets/images/undefined.png',
    width: 595,
    height: 595,
    id: '0',
    mimetype: 'image/png',
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
  picture.images = getUndefinedPictureMock().images;
  return picture;
}

export function getPicturesMock(nb: number): PictureType[] {
  const pictures = [];
  for (let i = 0; i < nb; i++) {
    pictures.push(getPictureMock());
  }
  return pictures;
}

export function getAvatarMock(): PictureType {
  const picture = new PictureType();
  picture.id = '666';
  picture.title = `Pas d'avatar`;
  picture.description = `L'avatar est inconnu`;
  picture.createdAt = new Date();
  picture.updatedAt = new Date();
  picture.images = getUndefinedPictureMock().images;
  return picture;
}
