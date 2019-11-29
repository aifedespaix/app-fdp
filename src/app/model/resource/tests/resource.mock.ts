import * as faker from 'faker';
import {ResourceType} from '../../_generated/graphql.schema';

export enum ResourceTypeEnum {
  Sound,
}

export function getResourcesMock(resourceType: ResourceTypeEnum): ResponseType[] {
  const resources = [];
  for (let i = 0; i < faker.random.number(10) + 5; i++) {
    resources.push(getResourceMock(resourceType));
  }
  return resources;
}

export function getResourceMock(resourceType): ResourceType {
  const resource = new ResourceType();
  resource.id = faker.random.uuid();
  resource.title = faker.random.words(5);
  resource.description = faker.random.words(25);
  resource.createdAt = new Date();
  resource.updatedAt = new Date();
  switch (resourceType) {
    case ResourceTypeEnum.Sound:
      resource.url = '/assets/sounds/test.mp3';
      break;
  }
  return resource;
}
