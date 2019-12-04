import {CategoryType} from '../_generated/graphql.schema';
import * as faker from 'faker';
import {getPictureMock} from '../picture/tests/picture.mocks';

export function getCategoryMock(): CategoryType {
  const category = new CategoryType();
  category.id = 'mock';
  category.picture = getPictureMock();
  category.name = faker.random.words(1);
  category.description = faker.lorem.paragraph(1);
  category.createdAt = new Date();
  category.updatedAt = new Date();
  return category;
}

export function getCategoryMocks(min = 10): CategoryType[] {
  const categories = [];
  for (let i = 0; i < faker.random.number(10) + min; i++) {
    categories.push(getCategoryMock());
  }
  return categories;
}
