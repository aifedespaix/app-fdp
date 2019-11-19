import * as faker from 'faker';
import {ResourceType} from '../../graphql.schema';

export function getResourcesMock(): ResponseType[] {
  const resources = [];
  for (let i = 0; i < faker.random.number(10) + 5; i++) {
    resources.push(getResourceMock());
  }
  return resources;
}

export function getResourceMock(): ResourceType {
  const resource = new ResourceType();
  resource.id = faker.random.uuid();
  resource.title = faker.random.words(5);
  resource.description = faker.random.words(25);
  resource.createdAt = new Date();
  resource.updatedAt = new Date();
  resource.url = faker.random.image();
  return resource;
}

export function getAvatarMock(): ResourceType {
  const resource = new ResourceType();
  resource.id = '666';
  resource.title = `Pas d'avatar`;
  resource.description = `L'avatar est inconnu`;
  resource.createdAt = new Date();
  resource.updatedAt = new Date();
  resource.url = '/assets/images/no-avatar.png';
  return resource;
}
