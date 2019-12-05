import {ArticleType, BoxType} from '../_generated/graphql.schema';
import * as faker from 'faker';
import {getUserMock} from '../user/user.mocks';
import {getPictureMock} from '../picture/picture.mocks';
import {getResourceMock, ResourceTypeEnum} from '../resource/resource.mock';

export function getBoxMock(): BoxType {
  const box = new BoxType();
  box.id = faker.random.uuid();
  box.title = faker.random.words(5);
  box.description = faker.lorem.paragraph(1);
  box.comments = [];
  box.sound = getResourceMock(ResourceTypeEnum.Sound);
  box.thumbnail = getPictureMock();
  box.author = getUserMock();
  box.createdAt = new Date();
  box.updatedAt = new Date();
  box.tags = [];
  box.likes = [];
  return box;
}

export function getBoxesMock(): BoxType[] {
  const boxes = [];
  for (let i = 0; i < faker.random.number(10) + 5; i++) {
    boxes.push(getBoxMock());
  }
  return boxes;
}
