import {ArticleType} from '../_generated/graphql.schema';
import * as faker from 'faker';
import {getUserMock} from '../user/user.mocks';
import {getPictureMock} from '../picture/picture.mocks';

export function getArticlesMock(): ArticleType[] {
  const articles = [];
  for (let i = 0; i < faker.random.number(10) + 5; i++) {
    articles.push(getArticleMock());
  }
  return articles;
}

export function getArticleMock(): ArticleType {
  const article = new ArticleType();
  article.id = faker.random.uuid();
  article.title = faker.random.words(5);
  article.description = faker.lorem.paragraph(1);
  article.content = faker.random.words(50);
  article.thumbnail = getPictureMock();
  article.author = getUserMock();
  article.createdAt = new Date();
  article.updatedAt = new Date();
  return article;
}
